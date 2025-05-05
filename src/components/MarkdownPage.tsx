import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

interface MarkdownPageProps {
  filePath: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ filePath }) => {
  const fullPath = path.join(process.cwd(), '..', 'site_content', filePath);
  let markdownContent = '';

  try {
    markdownContent = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`Error reading markdown file at ${fullPath}:`, error);
    markdownContent = `## Erro ao carregar conteúdo\n\nNão foi possível encontrar ou ler o arquivo: ${filePath}`;
  }

  return (
    <article className="prose lg:prose-xl max-w-none bg-white p-6 rounded shadow">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </article>
  );
};

export default MarkdownPage;

