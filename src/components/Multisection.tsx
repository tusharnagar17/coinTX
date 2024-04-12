import TradingViewWidget from './TradingViewWidget'
import TreadingSection from './TreadingSection'

const Multisection = () => {



    return (
        <div className='flex gap-4 mt-2'>
            <div className='bg-white p-4 flex-1'>
                <div>
                    <div>Coin-Logo, Coin-Name, Coin-symbol</div>
                    <div>Price in USD</div>
                    <div className='border-b-2'>Price in INR</div>

                    <div className='h-80'>
                        <TradingViewWidget />
                    </div>
                </div>
            </div>
            <div className='bg-white flex-2 w-96'>
                <TreadingSection />
            </div>

        </div>
    )
}

export default Multisection