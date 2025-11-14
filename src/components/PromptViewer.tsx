import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PromptViewerProps {
  title: string;
  icon: LucideIcon;
  systemMessage: string;
  userMessage: string;
  description?: string;
}

export function PromptViewer({
  title,
  icon: Icon,
  systemMessage,
  userMessage,
  description,
}: PromptViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="rounded-3xl bg-[var(--card)] border-2 border-[var(--border)] overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-7 flex items-center justify-between hover:bg-[var(--muted)]/30 transition-colors"
      >
        <div className="flex items-center gap-5">
          <Icon className="w-7 h-7 text-[var(--muted-foreground)] stroke-[1.5]" />
          <div className="text-left">
            <h3 className="font-semibold text-lg">{title}</h3>
            {description && (
              <p className="text-sm text-[var(--muted-foreground)] mt-1.5">{description}</p>
            )}
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[var(--muted-foreground)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)]" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[var(--border)] p-7 space-y-7">
          {/* System Message */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-[var(--primary)]">Mensagem do Sistema</h4>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(systemMessage, "system");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50 transition-colors text-sm"
              >
                {copied === "system" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar
                  </>
                )}
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--muted)]/20 border border-[var(--border)]">
              <pre className="text-sm text-[var(--muted-foreground)] font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
                {systemMessage}
              </pre>
            </div>
          </div>

          {/* User Message */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-[var(--primary)]">Template de Mensagem do Usuário</h4>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(userMessage, "user");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--muted)]/30 hover:bg-[var(--muted)]/50 transition-colors text-sm"
              >
                {copied === "user" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar
                  </>
                )}
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--muted)]/20 border border-[var(--border)]">
              <pre className="text-sm text-[var(--muted-foreground)] font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
                {userMessage}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

