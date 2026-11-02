interface HighlightedTextProps {
  text: string
}

export default function HighlightedText({ text }: HighlightedTextProps) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return (
    <>
      {parts.map((part, i) =>
        /^\*[^*]+\*$/.test(part) ? (
          <span key={i} className="highlight">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}