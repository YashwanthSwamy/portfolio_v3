import { cn } from "../lib/utils";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export const FloatingSocial = ({
  items,
  desktopClassName
}) => {
  return (
    <>
      <FloatingSocialDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingSocialDesktop = ({
  items,
  className
}) => {
  let mouseY = useMotionValue(Infinity); // Track Y instead of X

  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "hidden md:flex flex-col gap-4 items-center fixed right-6 top-1/2 -translate-y-1/2 z-50",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
  target,
  rel
}) {
  let ref = useRef(null);

  // Track vertical distance from cursor to center of icon
  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  // Use the same transform logic (expand at center, shrink on edges)
  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let springConfig = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  };

  let width = useSpring(widthTransform, springConfig);
  let height = useSpring(heightTransform, springConfig);
  let widthIcon = useSpring(widthTransformIcon, springConfig);
  let heightIcon = useSpring(heightTransformIcon, springConfig);

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target={target} rel={rel}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-transparent flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, y: "50%" }}
              animate={{ opacity: 1, x: 0, y: "100%" }}
              exit={{ opacity: 0, x: 20, y: "50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-700 text-teal-200 absolute left-1/2 -translate-x-1/2 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
