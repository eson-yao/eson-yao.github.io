# 姚一心 · 游戏关卡策划

个人作品集网站，用 Next.js + React 搭建，部署在 [GitHub Pages](https://eson-yao.github.io)。

页面介绍 UE5 灰盒关卡《雪隐》，以及作为空间设计基础的景观项目。简历与作品 PDF 放在 `public/files/` 目录。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:3000

## 改内容

所有文字都在 `lib/site.ts`：姓名、简介、《雪隐》介绍、景观项目、关于我、联系方式。改完保存即可在本地看到效果。

## 发布

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 https://eson-yao.github.io 。

首次使用需在仓库 Settings → Pages → Source 选择 **GitHub Actions**。
