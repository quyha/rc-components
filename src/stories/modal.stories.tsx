import React from 'react';
import Modal from '../components/modal';
import useToggle from '../hook/use-toggle';
import Button, { ButtonGroup } from '../components/button';
import Image from '../components/image';

export default {
    title: 'Modal',
    component: Modal,
};

export const Basic: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open Modal</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen }>
                        <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </Modal>
                )
            }
        </>
    )
};

export const ClickOutside: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open Modal</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen } hasClickOutside>
                        <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </Modal>
                )
            }
        </>
    )
};

export const LargeContent: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open Modal</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen } hasClickOutside large>
                        <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </Modal>
                )
            }
        </>
    )
};

export const Images: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open image</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen }>
                        <Image src="https://loremflickr.com/1280/960" alt="modal image" ratio="4-3" />
                    </Modal>
                )
            }
        </>
    )
};

export const Card: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open modal</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen } hasCard>
                        <>
                            <header className="modal-card-head">
                                <p className="modal-card-title">Modal title</p>
                                <button type="button" className="delete" aria-label="Close" onClick={ toggleOpen } />
                            </header>
                            <div className="modal-card-body">
                                <h1>{ 'It\'s a T. It goes "tuh".' }</h1>
                                <p>{ 'Is the Space Pope reptilian!? Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions? It\'s a T. It goes "tuh". Bender, hurry! This fuel\'s expensive! Also, we\'re dying!' }</p>
                                <p>{ 'Just once I\'d like to eat dinner with a celebrity who isn\'t bound and gagged. Ugh, it\'s filthy! <strong> Why not create a National Endowment for Strip Clubs while we\'re at it?</strong> <em> You seem malnourished.</em> Are you suffering from intestinal parasites?' }</p>
                                <h2>{ 'Ah, the \'Breakfast Club\' soundtrack! I can\'t wait til I\'m old enough to feel ways about stuff!' }</h2>
                                <p>{ 'I\'m a thing. Wow! A superpowers drug you can just rub onto your skin? You\'d think it would be something you\'d have to freebase. Say what? I daresay that Fry has discovered the smelliest object in the known universe!' }</p>
                                <ol>
                                    <li>{ 'You guys aren\'t Santa! You\'re not even robots. How dare you lie in front of Jesus?</li><li>Oh God, what have I done?</li><li>I never loved you.' }</li>
                                </ol>
                                <h3>{ 'I don\'t want to be rescued.' }</h3>
                                <p>{ 'Well I\'da done better, but it\'s plum hard pleading a case while awaiting trial for that there incompetence. I meant \'physically\'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually?' }</p>
                                <ul>
                                    <li>{ 'Ummm…to eBay?</li><li>There\'s no part of that sentence I didn\'t like!</li><li>And I\'d do it again! And perhaps a third time! But that would be it.' }</li>
                                </ul>
                                <p>{ 'You mean while I\'m sleeping in it? Is today\'s hectic lifestyle making you tense and impatient? Guess again. The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.' }</p>
                                <p>{ 'Ugh, it\'s filthy! Why not create a National Endowment for Strip Clubs while we\'re at it? With a warning label this big, you know they gotta be fun! I guess if you want children beaten, you have to do it yourself.' }</p>
                                <p>{ 'No. We\'re on the top. I am the man with no name, Zapp Brannigan! Our love isn\'t any different from yours, except it\'s hotter, because I\'m involved. Man, I\'m sore all over. I feel like I just went ten rounds with mighty Thor.' }</p>
                                <p>{ 'Ask her how her day was. Check it out, y\'all. Everyone who was invited is here. We\'re also Santa Claus! Then we\'ll go with that data file! Is the Space Pope reptilian!?' }</p>
                                <p>{ 'Shut up and take my money! Ooh, name it after me! I don\'t want to be rescued. Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.' }</p>
                                <p>{ 'I\'m just glad my fat, ugly mama isn\'t alive to see this day. We\'ll need to have a look inside you with this camera. A sexy mistake. I\'m sure those windmills will keep them cool. Hey, what kinda party is this? There\'s no booze and only one hooker.' }</p>
                                <p>{ 'Are you crazy? I can\'t swallow that. Then throw her in the laundry room, which will hereafter be referred to as "the brig". No argument here. You seem malnourished. Are you suffering from intestinal parasites?' }</p>
                                <p>{ 'Kids don\'t turn rotten just from watching TV. We\'ll need to have a look inside you with this camera. I daresay that Fry has discovered the smelliest object in the known universe! Bender?! You stole the atom.' }</p>
                                <p>{ 'This is the worst part. The calm before the battle. You mean while I\'m sleeping in it? Soothe us with sweet lies. Yes, if you make it look like an electrical fire. When you do things right, people won\'t be sure you\'ve done anything at all.' }</p>
                                <p>{ 'I\'m just glad my fat, ugly mama isn\'t alive to see this day. Calculon is gonna kill us and it\'s all everybody else\'s fault! I\'ll get my kit! Guess again. Professor, make a woman out of me.' }</p>
                                <p>{ 'Bender, you risked your life to save me! Why would I want to know that? Well, then good news! It\'s a suppository. Fry, you can\'t just sit here in the dark listening to classical music. We don\'t have a' }</p>
                            </div>
                            <footer className="modal-card-foot">
                                <ButtonGroup>
                                    <Button appearance="primary">Save</Button>
                                    <Button onClick={ toggleOpen }>Cancel</Button>
                                </ButtonGroup>
                            </footer>
                        </>
                    </Modal>
                )
            }
        </>
    )
};

export const CardWithoutFooter: React.FC<{}> = () => {
    const [ open, toggleOpen ] = useToggle(false);

    return (
        <>
            <Button appearance="primary" outlined onClick={ toggleOpen }>Open modal</Button>
            {
                open && (
                    <Modal open={ open } hideModal={ toggleOpen } hasCard>
                        <>
                            <header className="modal-card-head">
                                <p className="modal-card-title">Modal title</p>
                                <button type="button" className="delete" aria-label="Close" onClick={ toggleOpen } />
                            </header>
                            <div className="modal-card-body is-rounded-corner">
                                <h1>{ 'It\'s a T. It goes "tuh".' }</h1>
                                <p>{ 'Is the Space Pope reptilian!? Now that the, uh, garbage ball is in space, Doctor, perhaps you can help me with my sexual inhibitions? It\'s a T. It goes "tuh". Bender, hurry! This fuel\'s expensive! Also, we\'re dying!' }</p>
                                <p>{ 'Just once I\'d like to eat dinner with a celebrity who isn\'t bound and gagged. Ugh, it\'s filthy! <strong> Why not create a National Endowment for Strip Clubs while we\'re at it?</strong> <em> You seem malnourished.</em> Are you suffering from intestinal parasites?' }</p>
                                <h2>{ 'Ah, the \'Breakfast Club\' soundtrack! I can\'t wait til I\'m old enough to feel ways about stuff!' }</h2>
                                <p>{ 'I\'m a thing. Wow! A superpowers drug you can just rub onto your skin? You\'d think it would be something you\'d have to freebase. Say what? I daresay that Fry has discovered the smelliest object in the known universe!' }</p>
                                <ol>
                                    <li>{ 'You guys aren\'t Santa! You\'re not even robots. How dare you lie in front of Jesus?</li><li>Oh God, what have I done?</li><li>I never loved you.' }</li>
                                </ol>
                                <h3>{ 'I don\'t want to be rescued.' }</h3>
                                <p>{ 'Well I\'da done better, but it\'s plum hard pleading a case while awaiting trial for that there incompetence. I meant \'physically\'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually?' }</p>
                                <ul>
                                    <li>{ 'Ummm…to eBay?</li><li>There\'s no part of that sentence I didn\'t like!</li><li>And I\'d do it again! And perhaps a third time! But that would be it.' }</li>
                                </ul>
                                <p>{ 'You mean while I\'m sleeping in it? Is today\'s hectic lifestyle making you tense and impatient? Guess again. The alien mothership is in orbit here. If we can hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.' }</p>
                                <p>{ 'Ugh, it\'s filthy! Why not create a National Endowment for Strip Clubs while we\'re at it? With a warning label this big, you know they gotta be fun! I guess if you want children beaten, you have to do it yourself.' }</p>
                                <p>{ 'No. We\'re on the top. I am the man with no name, Zapp Brannigan! Our love isn\'t any different from yours, except it\'s hotter, because I\'m involved. Man, I\'m sore all over. I feel like I just went ten rounds with mighty Thor.' }</p>
                                <p>{ 'Ask her how her day was. Check it out, y\'all. Everyone who was invited is here. We\'re also Santa Claus! Then we\'ll go with that data file! Is the Space Pope reptilian!?' }</p>
                                <p>{ 'Shut up and take my money! Ooh, name it after me! I don\'t want to be rescued. Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.' }</p>
                                <p>{ 'I\'m just glad my fat, ugly mama isn\'t alive to see this day. We\'ll need to have a look inside you with this camera. A sexy mistake. I\'m sure those windmills will keep them cool. Hey, what kinda party is this? There\'s no booze and only one hooker.' }</p>
                                <p>{ 'Are you crazy? I can\'t swallow that. Then throw her in the laundry room, which will hereafter be referred to as "the brig". No argument here. You seem malnourished. Are you suffering from intestinal parasites?' }</p>
                                <p>{ 'Kids don\'t turn rotten just from watching TV. We\'ll need to have a look inside you with this camera. I daresay that Fry has discovered the smelliest object in the known universe! Bender?! You stole the atom.' }</p>
                                <p>{ 'This is the worst part. The calm before the battle. You mean while I\'m sleeping in it? Soothe us with sweet lies. Yes, if you make it look like an electrical fire. When you do things right, people won\'t be sure you\'ve done anything at all.' }</p>
                                <p>{ 'I\'m just glad my fat, ugly mama isn\'t alive to see this day. Calculon is gonna kill us and it\'s all everybody else\'s fault! I\'ll get my kit! Guess again. Professor, make a woman out of me.' }</p>
                                <p>{ 'Bender, you risked your life to save me! Why would I want to know that? Well, then good news! It\'s a suppository. Fry, you can\'t just sit here in the dark listening to classical music. We don\'t have a' }</p>
                            </div>
                        </>
                    </Modal>
                )
            }
        </>
    )
};
