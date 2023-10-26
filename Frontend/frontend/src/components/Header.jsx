import { Player } from '@lottiefiles/react-lottie-player'

const Header = () => {
    return (
        <header>
            <div className='flex justify-center items-center py-5 bg-slate-400 text-white'>
                <Player
                    className='mx-auto'
                    autoplay
                    loop
                    src="https://lottie.host/689431aa-1f0b-4c8f-b750-aa9bd1c938b6/tc6DE1FCYt.json"
                    style={{ height: '120px', width: '120px' }}
                />
                <p className='font-bold text-4xl'>Frontend Authentication with JWT</p>
            </div>
        </header>
    )
}

export default Header