import { Book, Key, Layers, Send } from "lucide-react";
import Link from "next/link";

import { DotnetIcon } from "@/components/icons/dotnet";
import { GolangIcon } from "@/components/icons/golang";
import { JavaIcon } from "@/components/icons/java";
import { LaravelIcon } from "@/components/icons/laravel";
import { NodejsIcon } from "@/components/icons/nodejs";
import { PhpIcon } from "@/components/icons/php";
import { PythonIcon } from "@/components/icons/python";
import { RestApiIcon } from "@/components/icons/rest-api";
import { RubyIcon } from "@/components/icons/ruby";
import { Button } from "@/components/ui/button";

export function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-[500] tracking-tight mb-1 text-foreground">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-normal font-[300] mt-0">
            Novu is the platform for adding real-time Inbox and notifications
            into your application.
          </p>
          <div className="flex gap-3 justify-center">
            <Button className="rounded-md">Get started</Button>
            <Button color="secondary" className="rounded-md">
              Browse examples
            </Button>
          </div>
        </div>

        {/* Main Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-24">
          {/* Left Column Stack */}
          <div className="md:col-span-8 flex flex-col gap-4">
            <Link
              href="/docs/getting-started"
              className="group no-underline block"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Book className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">
                    Get started
                  </h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Learn how to install and configure Novu into your project.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/platform/authentication"
              className="group no-underline block"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="mt-auto max-w-xl">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">
                    Authentication
                  </h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Learn how to secure your Novu app and manage API keys.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Full Height */}
          <div className="md:col-span-4 h-full">
            <Link
              href="/docs/platform/quickstart"
              className="group no-underline block h-full"
            >
              <div className="relative flex flex-col p-5 rounded-lg border border-border hover:bg-accent transition-all duration-300 gap-5 h-full">
                <div className="flex size-11 items-center justify-center rounded-md border border-dotted border-border">
                  <Send className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="mt-auto">
                  <h2 className="text-base font-medium text-foreground mb-0 mt-0">
                    Tutorial
                  </h2>
                  <p className="text-sm text-muted-foreground font-[300] leading-normal mb-0">
                    Follow our interactive tutorial for adding notifications to
                    your app.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* API Reference Section */}
        <div>
          <h2 className="text-2xl font-medium mb-6 text-foreground">
            API Reference
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              {
                title: "REST API",
                package: "https://api.novu.co/v1",
                icon: RestApiIcon,
                color: "text-foreground dark:text-foreground",
                href: "/docs/api/overview",
              },
              {
                title: "Node.js",
                package: "@novu/api",
                icon: NodejsIcon,
                color: "text-[#339933] dark:text-[#43c743]",
                href: "/docs/sdks/nodejs",
              },
              {
                title: "Python",
                package: "novu-py",
                icon: PythonIcon,
                color: "text-[#3776AB] dark:text-[#4d9fe6]",
                href: "/docs/sdks/python",
              },
              {
                title: "Go",
                package: "github.com/novuhq/novu-go",
                icon: GolangIcon,
                color: "text-[#00ADD8] dark:text-[#29c4ec]",
                href: "/docs/sdks/go",
              },
              {
                title: "PHP",
                package: "novuhq/novu",
                icon: PhpIcon,
                color: "text-[#777BB4] dark:text-[#9b9fd8]",
                href: "/docs/sdks/php",
              },
              {
                title: "Java",
                package: "co.novu:novu-java",
                icon: JavaIcon,
                color: "text-[#007396] dark:text-[#1a9fd1]",
                href: "/docs/sdks/java",
              },
              {
                title: "Laravel",
                package: "novu/novu-laravel",
                icon: LaravelIcon,
                color: "text-[#FF2D20] dark:text-[#ff4d42]",
                href: "/docs/sdks/laravel",
              },
              {
                title: ".NET",
                package: "Novu",
                icon: DotnetIcon,
                color: "text-[#512BD4] dark:text-[#7048ec]",
                href: "/docs/sdks/dotnet",
              },
              {
                title: "Ruby",
                package: "novu",
                icon: RubyIcon,
                color: "text-[#CC342D] dark:text-[#e65a54]",
                href: "/docs/sdks/ruby",
              },
              {
                title: "Kotlin",
                package: "co.novu:novu-kotlin",
                icon: Layers,
                color: "text-[#7F52FF] dark:text-[#9c7aff]",
                href: "/docs/sdks/kotlin",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group no-underline"
              >
                <div className="flex items-center gap-3 p-3.5 border border-border rounded-lg hover:bg-accent transition-colors">
                  <div
                    className={`${item.color} flex items-center h-12 w-12 justify-center rounded-lg border border-dotted border-border bg-background group-hover:border-border group-focus:border-border`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {item.package}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
