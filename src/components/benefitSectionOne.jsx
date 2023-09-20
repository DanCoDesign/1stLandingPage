import SectionBenefit from "./sectionBenefit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import BookAMeeting from "./BookAMeetingBtn";

const BenefitCircle = (props) => {
    return (
        <>
            <div className="mx-auto w-[54px] h-[54px] bg-[#E7EBFC] rounded-full flex justify-center items-center" >
                <div className="w-[24px] h-[24px] text-center">
                    <FontAwesomeIcon icon={props.icon} color="#2E4FD7" />
                </div>
            </div>
        </>
    )
};

const BenefitSectionOne = () => {
    return (
        <section className="py-5 bg-[#E7EBFC] dark:bg-[#0B4130] sm:py-8 lg:py-8 my-5 sm:my-8 lg:my-8">
            <div className="container p-8 mx-auto flex flex-wrap -mx-4 lg:justify-between ">
                <div className="w-full px-4 lg:w-1/2 xl:w-6/12 flex flex-col sm:pe-40">
                    <div className="flex flex-row mb-12">
                        <div className="w-[54px] mr-[24px]">
                            <BenefitCircle icon={faStar} />
                        </div>
                        <div className="w-full ">
                            <SectionBenefit
                                title=" First Benefit"
                                text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row mb-12">
                        <div className="w-[54px] mr-[24px]">
                            <BenefitCircle icon={faTableCellsLarge} />
                        </div>
                        <div className="w-full">
                            <SectionBenefit
                                title="Third Benefit"
                                text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[54px] mr-[24px]">
                            <BenefitCircle icon={faLayerGroup} />
                        </div>
                        <div className="w-full">
                            <SectionBenefit
                                title=" Third Benefit"
                                text="Gorgeous, high-quality design system for mobile, tablet & desktop devices a few"
                            />
                        </div>
                    </div>


                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-6/12 mt-12 lg:mt-0">
                    <div className="flex flex-col w-full mb-8">
                        <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Headline of Modern and Digital Lending Platform Seconds</h3>
                        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.</p>
                        <div className="flex"><BookAMeeting title="Learn More" /></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BenefitSectionOne;