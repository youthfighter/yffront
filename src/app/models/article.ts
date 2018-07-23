/**
 * @param id 文章id
 * @param title 文章title
 * @param author 文章作者
 * @param content 文章内容 markdown内容
 * @param synopsis 文章简介 
 * @param htmlContent 文章内容 html内容
 * @param createDate 文章创建日期
 * @param publishDate 文章发布日期
 * @param tags文章标签
 */
export class Article {
    id: string;
    title: string;
    author: string;
    content: string;
    synopsis: string;
    htmlContent: string;
    createDate: number;
    publishDate: number;
    tags: string[];
}
