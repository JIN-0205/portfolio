// "use client";
// import { useEffect, useRef, useState } from "react";

// export default function HeroIntroCover({
//   onFinish,
// }: {
//   onFinish?: () => void;
// }) {
//   const [phase, setPhase] = useState<"drawing" | "fadeout" | "done">("drawing");
//   const [bgOpacity, setBgOpacity] = useState(1);
//   const pathRef = useRef<SVGPathElement>(null);
//   const [size, setSize] = useState({ width: 2000, height: 1500 });

//   // より明確で読みやすい "JIN" の文字パス
//   const pathData = `
//     M${size.width / 2 - 80},${size.height / 2 - 40}
//     L${size.width / 2 - 80},${size.height / 2 + 40}
//     M${size.width / 2 - 80},${size.height / 2 + 20}
//     Q${size.width / 2 - 60},${size.height / 2 + 30}
//     ${size.width / 2 - 40},${size.height / 2 + 20}

//     M${size.width / 2 - 20},${size.height / 2 - 40}
//     L${size.width / 2 - 20},${size.height / 2 + 40}

//     M${size.width / 2 + 10},${size.height / 2 - 40}
//     L${size.width / 2 + 10},${size.height / 2 + 40}
//     Q${size.width / 2 + 30},${size.height / 2 + 30}
//     ${size.width / 2 + 50},${size.height / 2 + 40}
//     Q${size.width / 2 + 70},${size.height / 2 + 30}
//     ${size.width / 2 + 80},${size.height / 2 + 20}
//   `;

//   useEffect(() => {
//     const updateSize = () => {
//       setSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   useEffect(() => {
//     if (phase !== "drawing") return;
//     const path = pathRef.current;
//     if (!path) return;
//     const length = path.getTotalLength();

//     // より滑らかなアニメーション設定
//     path.style.strokeDasharray = `${length}`;
//     path.style.strokeDashoffset = `${length}`;
//     path.getBoundingClientRect(); // reflow
//     path.style.transition =
//       "stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)";
//     path.style.strokeDashoffset = "0";

//     const timer = setTimeout(() => setPhase("fadeout"), 2600);
//     return () => clearTimeout(timer);
//   }, [phase, size]);

//   useEffect(() => {
//     if (phase !== "fadeout") return;
//     setBgOpacity(1);
//     const fadeTimer = setTimeout(() => setBgOpacity(0), 50);
//     const doneTimer = setTimeout(() => setPhase("done"), 1000);
//     return () => {
//       clearTimeout(fadeTimer);
//       clearTimeout(doneTimer);
//     };
//   }, [phase]);

//   useEffect(() => {
//     if (phase === "done" && onFinish) onFinish();
//   }, [phase, onFinish]);

//   return (
//     <div
//       className={`fixed inset-0 z-[60] pointer-events-none transition-opacity duration-1000 ease-out`}
//       style={{
//         opacity: bgOpacity,
//         background:
//           "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
//       }}
//     >
//       <svg
//         className="w-screen h-screen"
//         viewBox={`0 0 ${size.width} ${size.height}`}
//         width="100%"
//         height="100%"
//       >
//         <defs>
//           {/* グラデーションパターン */}
//           <linearGradient
//             id="strokeGradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="100%"
//           >
//             <stop offset="0%" stopColor="#60a5fa" />
//             <stop offset="50%" stopColor="#a855f7" />
//             <stop offset="100%" stopColor="#ec4899" />
//           </linearGradient>

//           {/* グロー効果 */}
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>

//           <mask id="hero-text-mask">
//             <rect
//               x="0"
//               y="0"
//               width={size.width}
//               height={size.height}
//               fill="white"
//             />
//             <g transform={`translate(0, 0)`}>
//               <path
//                 ref={pathRef}
//                 d={pathData}
//                 fill="none"
//                 stroke="black"
//                 strokeWidth="12"
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 filter="url(#glow)"
//               />
//             </g>
//           </mask>
//         </defs>

//         {/* 背景パーティクル効果 */}
//         <rect
//           x="0"
//           y="0"
//           width={size.width}
//           height={size.height}
//           fill="url(#strokeGradient)"
//           mask="url(#hero-text-mask)"
//           opacity="0.9"
//         />

//         {/* 追加のグロー効果 */}
//         <path
//           d={pathData}
//           fill="none"
//           stroke="url(#strokeGradient)"
//           strokeWidth="4"
//           strokeLinejoin="round"
//           strokeLinecap="round"
//           filter="url(#glow)"
//           opacity="0.8"
//         />
//       </svg>

//       {/* 背景のサブタイトル */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-lg md:text-xl text-white/60 font-light tracking-wider mb-4">
//             Welcome to
//           </p>
//           <div className="text-6xl md:text-8xl font-bold text-white/20 tracking-widest">
//             JIN
//           </div>
//           <p className="text-2xl md:text-3xl text-white/40 font-light tracking-widest mt-4">
//             Portfolio
//           </p>
//         </div>
//       </div>

//       {/* 描画中の表示 */}
//       {phase === "drawing" && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-sm md:text-base text-white/80 font-light tracking-wider animate-pulse">
//               Drawing...
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroIntroCover({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const [phase, setPhase] = useState<"drawing" | "fadeout" | "done">("drawing");
  const [bgOpacity, setBgOpacity] = useState(1);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [size, setSize] = useState({ width: 2000, height: 1500 });

  // 明確な「JIN」の文字パス - 各文字を分離
  const getPathData = () => {
    const centerX = size.width / 2;
    const centerY = size.height / 2;
    const letterWidth = 80;
    const letterHeight = 120;

    return [
      // J
      `M${centerX - letterWidth * 1.2 - 20},${centerY - letterHeight / 2}
       L${centerX - letterWidth * 1.2 + 20},${centerY - letterHeight / 2}
       M${centerX - letterWidth * 1.2 + 20},${centerY - letterHeight / 2}
       L${centerX - letterWidth * 1.2 + 20},${centerY + letterHeight / 3}
       Q${centerX - letterWidth * 1.2 + 20},${centerY + letterHeight / 2}
       ${centerX - letterWidth * 1.2},${centerY + letterHeight / 2}
       L${centerX - letterWidth * 1.2 - 20},${centerY + letterHeight / 2}`,

      // I
      `M${centerX - 20},${centerY - letterHeight / 2}
       L${centerX + 20},${centerY - letterHeight / 2}
       M${centerX},${centerY - letterHeight / 2}
       L${centerX},${centerY + letterHeight / 2}
       M${centerX - 20},${centerY + letterHeight / 2}
       L${centerX + 20},${centerY + letterHeight / 2}`,

      // N
      `M${centerX + letterWidth * 1.1},${centerY - letterHeight / 2}
       L${centerX + letterWidth * 1.1},${centerY + letterHeight / 2}
       M${centerX + letterWidth * 1.1},${centerY - letterHeight / 2}
       L${centerX + letterWidth * 2.1},${centerY + letterHeight / 2}
       M${centerX + letterWidth * 2.1},${centerY - letterHeight / 2}
       L${centerX + letterWidth * 2.1},${centerY + letterHeight / 2}`,
    ];
  };

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (phase !== "drawing") return;

    const paths = pathRefs.current.filter(Boolean);
    if (paths.length === 0) return;

    // 各文字を順番にアニメーション
    paths.forEach((path, index) => {
      if (!path) return;

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      setTimeout(() => {
        path.getBoundingClientRect(); // reflow
        path.style.transition =
          "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)";
        path.style.strokeDashoffset = "0";
      }, index * 300); // 各文字を300ms間隔で描画
    });

    const timer = setTimeout(() => setPhase("fadeout"), 2000);
    return () => clearTimeout(timer);
  }, [phase, size]);

  useEffect(() => {
    if (phase !== "fadeout") return;
    setBgOpacity(1);
    const fadeTimer = setTimeout(() => setBgOpacity(0), 50);
    const doneTimer = setTimeout(() => setPhase("done"), 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "done" && onFinish) onFinish();
  }, [phase, onFinish]);

  const pathData = getPathData();

  return (
    <div
      className={`fixed inset-0 z-[60] pointer-events-none transition-opacity duration-1000 ease-out`}
      style={{
        opacity: bgOpacity,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      <svg
        className="w-screen h-screen"
        viewBox={`0 0 ${size.width} ${size.height}`}
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient
            id="strokeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 各文字を個別に描画 */}
        {pathData.map((path, index) => (
          <g key={index}>
            {/* 強いグロー効果 */}
            <path
              d={path}
              fill="none"
              stroke="url(#strokeGradient)"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#strongGlow)"
              opacity="0.6"
            />
            {/* メインの線 */}
            <path
              ref={(el) => {
                pathRefs.current[index] = el;
              }}
              d={path}
              fill="none"
              stroke="url(#strokeGradient)"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#glow)"
              opacity="0.9"
            />
          </g>
        ))}
      </svg>

      {/* 背景のサブタイトル */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg md:text-xl text-white/40 font-light tracking-wider mb-8">
            Welcome to
          </p>
          <div className="text-6xl md:text-8xl font-bold text-white/10 tracking-widest">
            JIN
          </div>
          <p className="text-2xl md:text-3xl text-white/30 font-light tracking-widest mt-8">
            Portfolio
          </p>
        </div>
      </div> */}

      {/* 描画中の表示 */}
      {phase === "drawing" && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="text-sm md:text-base text-white/60 font-light tracking-wider animate-pulse">
              Drawing...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
