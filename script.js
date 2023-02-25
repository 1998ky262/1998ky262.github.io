ScrollReveal().reveal('#a', { 
  duration: 1600, // アニメーションの完了にかかる時間
  viewFactor: 0, // 0~1,どれくらい見えたら実行するか
  scale: 0.5, // 50%から拡大
  reset: false   // 何回もアニメーション表示
});
anime({
  targets: '#e',
  width: '80%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop:'ture'
});
