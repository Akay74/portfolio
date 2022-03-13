import Theme from '../styles/theme';
import { AnimatePresence, AnimateSharedLayout} from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type = 'crossfade'>
      <AnimatePresence exitBeforeEnter>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
 