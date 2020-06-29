import React, { useState, useEffect, ReactNode } from 'react';

interface Tab {
    id: number;
    name: string;
    headComponent?: ReactNode;
    panelComponent: ReactNode;
}

interface Props {
    /**
     * Array tab contain { id: number, name: string, headComponent?: ReactNode, panelComponent: ReactNode }
     */
    tabs: Tab[];
    changeTab?: (index: number) => void;
    hasActiveMaker?: boolean;
}

const Tab: React.FC<Props> = (props: Props) => {
    const { tabs, changeTab, hasActiveMaker } = props;

    const activeMakerRef = React.useRef<HTMLElement | null>(null);
    const ulRef = React.useRef<HTMLUListElement | null>(null);

    const [ currentIndexTab, setCurrentIndexTab ] = useState<number>(0);

    const activeTab = (index: number) => (): void => {
        if (changeTab) {
            changeTab(index);
        }
        setCurrentIndexTab(index);
    };

    useEffect(() => {
        if (!hasActiveMaker) {
            return;
        }

        if (!ulRef.current) {
            return;
        }

        let activeEle = ulRef.current.firstChild;

        if (currentIndexTab !== 0) {
            activeEle = ulRef.current.querySelector('.is-active');
        }

        if (!(activeEle instanceof HTMLElement)) {
            return;
        }

        const rectActive = activeEle.getBoundingClientRect();
        const { offsetLeft } = activeEle;

        if (activeMakerRef.current instanceof HTMLElement) {
            activeMakerRef.current.style.width = `${ rectActive.width }px`;
            activeMakerRef.current.style.left = `${ offsetLeft }px`;
        }
    }, [ currentIndexTab, hasActiveMaker ]);

    return (
        <>
            <div className="tabs">
                <ul ref={ ulRef }>
                    {
                        tabs.map((tab, i) => (
                            <li
                                key={ tab.id }
                                className={ `tab ${ currentIndexTab === i ? 'is-active' : '' }` }
                            >
                                {
                                    tab.headComponent ? (
                                        <div onClick={ activeTab(i) }>{ tab.headComponent }</div>
                                    ) : (
                                        <span className="tab-title" onClick={ activeTab(i) } title={ tab.name }>{ tab.name }</span>
                                    )
                                }
                            </li>
                        ))
                    }
                    { hasActiveMaker && <span className="tab-active-maker" ref={ activeMakerRef } /> }
                </ul>
            </div>
            <div className="tab-content">
                { tabs[currentIndexTab].panelComponent }
            </div>
        </>
    )
};

Tab.defaultProps = {
    hasActiveMaker: true,
};

export default Tab;
