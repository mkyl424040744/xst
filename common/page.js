export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        name: 'Vant Weapp 组件库演示'
      };
    },
    ...options
  });
}
