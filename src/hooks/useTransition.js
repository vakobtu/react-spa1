
import { useAnimation } from 'framer-motion';

const useTransition = () => {
  const controls = useAnimation();

  const fadeIn = async () => {
    await controls.start({ opacity: 1 });
  };

  const fadeOut = async () => {
    await controls.start({ opacity: 0 });
  };

  return { controls, fadeIn, fadeOut };
};

export default useTransition;
