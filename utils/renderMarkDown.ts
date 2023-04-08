import { remark } from 'remark';
import html from 'remark-html';

export async function renderMd (content: string) {
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml
  }
}