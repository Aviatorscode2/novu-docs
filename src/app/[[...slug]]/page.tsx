import { openapi, source } from '@/lib/source';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Accordion, Accordions } from '../../components/accordion';
import { Callout } from '../../components/callout';
import { CodeBlock, Pre } from '../../components/codeblock';
import { ImageZoom } from '../../components/image-zoom';
import { Step, Steps } from '../../components/steps';
import { Tab } from '../../components/tabs';
import { Tabs } from '../../components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { metadataImage } from '../../lib/metadata-image';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const path = `src/apps/docs/content/docs/${page.file.path}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        single: false,
      }}
      editOnGithub={{
        repo: 'docs',
        owner: 'novuhq',
        sha: 'main',
        path,
      }}
      article={{
        className: 'max-sm:pb-16 max-w-[770px] !px-0',
      }}
      container={{
        className: '[&>article]:gap-4',
      }}
    >
      <DocsTitle className="max-w-[640px]">{page.data.pageTitle ?? page.data.title}</DocsTitle>
      <DocsDescription className="mb-4">{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            pre: (props) => {
              // Extract language and title from className if available
              const className = props.className || '';
              const match = /language-(\w+)/.exec(className);
              const lang = match ? match[1] : '';

              return (
                <CodeBlock title={lang} {...props}>
                  <Pre {...props} />
                </CodeBlock>
              );
            },
            CodeBlock: CodeBlock,
            Callout: Callout,
            APIPage: (props) => (
              <div id="api-page">
                <openapi.APIPage {...props} />
              </div>
            ),
            Accordions: Accordions,
            Accordion: Accordion,
            Steps: Steps,
            Step: Step,
            Popup,
            PopupContent,
            PopupTrigger,
            TypeTable: TypeTable,
            Tabs: Tabs,
            Tab: Tab,
            Tooltip: ({ children, content }: { children: React.ReactNode; content: string }) => (
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger
                    asChild
                    className="text-sm inline-block bg-zinc-100 dark:bg-zinc-800 hover:cursor-pointer text-zinc-700 dark:text-zinc-300 leading-[20px] text-[.8125rem] rounded-md px-1 py-[.25rem] px-[.375rem] decoration-dotted decoration-zinc-400 dark:decoration-zinc-500 underline underline-offset-4"
                  >
                    {children}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{content}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ),
            Method: (props) => (
              <Link href={props.href} className="no-underline">
                <span className="text-sm bg-[#f3f0ff] dark:bg-[#2d2a3f] hover:cursor-pointer border border-[#e4defc] dark:border-[#4a4273] text-[#5746af] dark:text-[#a89ade] leading-[20px] text-[.8125rem] rounded-md px-1 py-[.25rem] px-[.375rem] whitespace-nowrap">
                  {props.children}
                </span>
              </Link>
            ),
            img: (props) => <ImageZoom {...props} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  });
}
