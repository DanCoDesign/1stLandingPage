import SectionBenefit from "./sectionBenefit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'

const BenefitCircle = (props) => {
    return (
        <>
            <div className="mx-auto w-[54px] lg:w-[72px] h-[54px] lg:h-[72px] bg-[#E7EBFC] rounded-full flex justify-center items-center" >
                <div className="w-[24px] h-[24px] text-center">
                    <FontAwesomeIcon icon={props.icon} color="#f46953" />
                </div>
            </div>
        </>
    )
};

const BenefitItem = ({ icon, title, text }) => {
    return (
        <div className="flex flex-row mb-12">
            <div className="">
                <BenefitCircle icon={icon} />
            </div>
            <div className="w-full ml-[24px] lg:ml-[40px]">
                <SectionBenefit title={title} text={text} />
            </div>
        </div>
    )
};

const BenefitSectionTwo = () => {



    return (
        <>
                <div className="flex flex-wrap -mx-4 lg:justify-between mb-28">
                    <div className="w-full px-4 flex">
                        <h3 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Benefits of working with us</h3>
                    </div>
                    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-12">
                        <BenefitItem
                            icon={faLocationArrow}
                            title="Time zones ain’t no thing"
                            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                        />
                        <BenefitItem
                            icon={faMap}
                            title="Impossible? We’re on it"
                            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                        />

                        <BenefitItem
                            icon={faWaveSquare}
                            title="Full spectrum of services"
                            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                        />
                        <BenefitItem
                            icon={faList}
                            title="Flexible work terms"
                            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat."
                        />
                    </div>
                </div>
        </>
    )
}

export default BenefitSectionTwo;