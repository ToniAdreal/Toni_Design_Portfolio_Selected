export interface MediaChannel {
  id: string;
  name: string;
  brandHandle: string;
  category: "direct" | "ecosystem";
  tag: string;
  description: string;
  url?: string;
  urlLabel?: string;
  searchTip?: string;
}

export const writingEcosystem = {
  brandName: "Tokenta Signal",
  tagline: "Cross-platform publications on design engineering, AI systems & Web3 infrastructure",
  summary:
    "A multi-platform publication ecosystem by Toni Adreal documenting product architecture, design systems, AI interactions, and tech-driven observations in public.",
  channels: [
    {
      id: "substack",
      name: "Substack",
      brandHandle: "Tokenta Signal",
      category: "direct",
      tag: "Newsletter & Long-form",
      description: "In-depth essays on product engineering, systems thinking, and AI interaction models.",
      url: "https://toniadreal.substack.com/",
      urlLabel: "Read on Substack ↗",
      searchTip: "toniadreal.substack.com",
    },
    {
      id: "medium",
      name: "Medium",
      brandHandle: "Tokenta Signal",
      category: "direct",
      tag: "Engineering & Design",
      description: "Case studies, design system teardowns, and engineering walkthroughs.",
      url: "https://medium.com/@toniadreal11",
      urlLabel: "Read on Medium ↗",
      searchTip: "medium.com/@toniadreal11",
    },
    {
      id: "wechat-article",
      name: "微信公众号",
      brandHandle: "Tokenta Signal",
      category: "direct",
      tag: "深度文章 / 专栏",
      description: "体系化技术思考、设计工程实践与深度长文专栏。点击直达官方发布精选代表作。",
      url: "https://mp.weixin.qq.com/s/seNBOTwNzvbfyDIzYHNyvg",
      urlLabel: "阅读精选长文 ↗",
      searchTip: "微信内搜索公众号「Tokenta Signal」",
    },
    {
      id: "wechat-channels",
      name: "微信视频号",
      brandHandle: "TOKENTA", // Explicitly uppercase per user request
      category: "ecosystem",
      tag: "动效拆解 & 演示",
      description: "交互动效拆解、产品架构演练、高保真原型实战演示与沉浸式动态体验。",
      searchTip: "微信视频号搜索「TOKENTA」（全部字母大写）",
    },
    {
      id: "xiaohongshu",
      name: "小红书",
      brandHandle: "Tokenta Signal",
      category: "ecosystem",
      tag: "视觉手记 & 灵感",
      description: "设计系统切片、工程思考碎片、UI/UX 细节拆解与工作流手记。",
      searchTip: "小红书 App 搜索「Tokenta Signal」关注",
    },
    {
      id: "douyin",
      name: "抖音",
      brandHandle: "Tokenta Signal",
      category: "ecosystem",
      tag: "前沿交互短片",
      description: "前沿设计趋势、动效设计速递与设计工程师视角的技术短视频分享。",
      searchTip: "抖音 App 搜索「Tokenta Signal」关注",
    },
  ] as MediaChannel[],
};
