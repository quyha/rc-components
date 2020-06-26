import { useLayoutEffect } from 'react';

function useLockBodyScroll(): void {
    // eslint-disable-next-line consistent-return
    useLayoutEffect(() => {
        const { body } = document;

        if (body !== null) {
            body.style.overflow = 'hidden';

            return (): void => {
                body.style.overflow = 'visible';
            }
        }
    }, []);
}

export default useLockBodyScroll;
