const framerVariants = {
  none: {
    opacity: 1,
    x: 0,
    y: 0,
    z: 0,
    transition: {
      x: { duration: 1 },
      y: { duration: 1 },
    },
  },
  left: {
    x: -100,
  },
  right: {
    x: 100,
  },
  top: {
    y: -100,
  },
  bottom: {
    y: 100,
  }
};

export { framerVariants };
