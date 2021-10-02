import classes from './CamScreen.module.css'

function CamScreen() {
    return (
        <div className={`bg-gray-200 p-8 w-screen h-screen `}>
            <div className={`bg-gray-700 text-white rounded-lg p-4 items-center ${classes.space_between}`}>
                <span>CamScreen Camera</span>
            </div>
            <div className={`bg-gray-700 text-white rounded-lg p-4 ${classes.space_between}`}>
                <span> CamScreen Info</span>
            </div>
        </div>
    )
}

export default CamScreen
