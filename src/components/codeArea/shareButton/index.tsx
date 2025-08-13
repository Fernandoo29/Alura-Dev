import styles from "./estilo.module.css";

import {
  RefObject,
  useState,
  //   forwardRef,
  //   useImperativeHandle,
  // useEffect,
} from "react";

import hljs from "highlight.js";
import "../../../styles/highlight/agate.css";
import { toSvg, toJpeg, toPng } from "html-to-image";
import { LuImageDown } from "react-icons/lu";

interface ShareButtonProps {
  codeAreaRef: RefObject<HTMLDivElement | null>;
}

function ShareButton({ codeAreaRef }: ShareButtonProps) {
  const [isShareTypeSelectorOpen, setIsShareTypeSelectorOpen] = useState(false);

  const downloadImgShare = async (downloadType: string) => {
    setIsShareTypeSelectorOpen(!isShareTypeSelectorOpen);

    // Captura a area de código
    const codeRef = codeAreaRef.current?.querySelector(
      ".hljs"
    ) as HTMLElement | null;

    // Captura o elemento do botão de compartilhamento
    const shareBtnDiv = codeAreaRef.current?.querySelector(
      `.${styles.shareImgBtn}`
    ) as HTMLElement | null;

    // Salva o valor original do border-radius
    const containerDiv = codeAreaRef.current;
    const originalBorderRadius = containerDiv?.style.borderRadius;

    // Remove o botão de compartilhamento antes de capturar a imagem
    if (shareBtnDiv) {
      shareBtnDiv.style.display = "none";
    }

    // Altera o border-radius apenas para a imagem
    if (containerDiv) {
      containerDiv.style.borderRadius = "0px";
    }

    // Aplica o highlight antes de capturar a imagem
    if (codeRef) {
      hljs.highlightElement(codeRef);
    }

    if (codeAreaRef.current) {
      const link = document.createElement("a");
      let dataUrl;
      switch (downloadType) {
        case "SVG":
          dataUrl = await toSvg(codeAreaRef.current);
          link.download = "codeArea.svg";
          link.href = dataUrl;
          break;

        case "JPG":
          dataUrl = await toJpeg(codeAreaRef.current);
          link.download = "codeArea.jpg";
          link.href = dataUrl;
          break;

        case "PNG":
          dataUrl = await toPng(codeAreaRef.current);
          link.download = "codeArea.png";
          link.href = dataUrl;
          break;

        default:
          break;
      }

      link.click();
    }

    // Restaura o border-radius original
    if (containerDiv) {
      containerDiv.style.borderRadius = originalBorderRadius || "";
    }

    // Rerstaura o botão de compartilhamento após de capturar a imagem
    if (shareBtnDiv) {
      shareBtnDiv.style.display = "";
    }
  };

  return (
    <>
      <div
        className={styles.shareImgBtn}
        onClick={() => setIsShareTypeSelectorOpen(!isShareTypeSelectorOpen)}
      >
        <LuImageDown />
      </div>
      {isShareTypeSelectorOpen && (
        <div className={styles.shareTypeSelector}>
          <div
            onClick={() => downloadImgShare("PNG")}
            className={styles.shareTypeOption}
          >
            PNG
          </div>
          <div
            onClick={() => downloadImgShare("JPG")}
            className={styles.shareTypeOption}
          >
            JPG
          </div>
          <div
            onClick={() => downloadImgShare("SVG")}
            className={styles.shareTypeOption}
          >
            SVG
          </div>
        </div>
      )}
    </>
  );
}

export default ShareButton;
