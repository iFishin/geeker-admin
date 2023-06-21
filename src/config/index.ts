/*
 * @Date: 2023-06-20 14:45:14
 * @LastEditors: Fishing yoo725@hotmail.com
 * @LastEditTime: 2023-06-20 17:29:41
 * @FilePath: \geeker-admin\src\config\index.ts
 * @Description: https://github.com/iFishin
 */
// ? 全局默认配置项

// 首页地址（默认）
export const HOME_URL: string = "/home/index";

// 登录页地址（默认）
export const LOGIN_URL: string = "/login";

// 默认主题颜色
export const DEFAULT_PRIMARY: string = "#198754";

// 路由白名单地址（必须是本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ["/500"];

// 高德地图 key
export const AMAP_MAP_KEY: string = "";

// 百度地图 key
export const BAIDU_MAP_KEY: string = "";
