document.addEventListener('DOMContentLoaded', () => {
  // ナビゲーションメニューの制御
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // スクロールアニメーション
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-item, .menu-category, .price-card, .contact-form');

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // 初期スタイルの設定
  const initializeAnimations = () => {
    const elements = document.querySelectorAll('.feature-item, .menu-category, .price-card, .contact-form');
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s ease-out';
    });
  };

  // スクロールトップボタンの制御
  const scrollTopButton = document.querySelector('.scroll-top');

  const toggleScrollTopButton = () => {
    if (window.pageYOffset > 300) {
      scrollTopButton.classList.add('visible');
    } else {
      scrollTopButton.classList.remove('visible');
    }
  };

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ヘッダーの背景透過制御
  const header = document.querySelector('.header');

  const toggleHeaderBackground = () => {
    if (window.pageYOffset > 50) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      header.style.backgroundColor = 'var(--white)';
    }
  };

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // モバイルメニューを閉じる
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      }
    });
  });

  // フォーム送信処理
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // ここにフォーム送信の処理を実装
    alert('お問い合わせありがとうございます。\nメッセージを受け付けました。');
    contactForm.reset();
  });

  // イベントリスナーの設定
  window.addEventListener('scroll', () => {
    animateOnScroll();
    toggleScrollTopButton();
    toggleHeaderBackground();
  });

  // 初期化
  initializeAnimations();
  animateOnScroll();
});
