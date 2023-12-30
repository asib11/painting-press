

const FindUs = () => {
    return (
        <div className="bg-[#800000] flex flex-col lg:flex-row p-16 my-10 rounded-lg lg:justify-around">
            <div className="flex justify-center items-center max-sm:mb-5 sm:mb-5 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <g clip-path="url(#clip0_13_1569)">
                        <path d="M30.0845 19.3115C24.1441 19.3115 19.3116 24.1441 19.3116 30.0845C19.3116 36.0249 24.1441 40.8575 30.0845 40.8575C36.0249 40.8575 40.8575 36.0249 40.8575 30.0845C40.8575 24.1441 36.0249 19.3115 30.0845 19.3115ZM34.8725 31.2815H30.0845C29.4231 31.2815 28.8875 30.746 28.8875 30.0845V25.2965C28.8875 24.635 29.4231 24.0995 30.0845 24.0995C30.746 24.0995 31.2815 24.635 31.2815 25.2965V28.8875H34.8725C35.534 28.8875 36.0695 29.423 36.0695 30.0845C36.0695 30.746 35.534 31.2815 34.8725 31.2815Z" fill="#F2BA49" />
                        <path d="M38.3837 3.67087C38.3837 3.00037 37.8572 2.47388 37.1867 2.47388H31.2017V6.06487C31.2017 6.73506 30.6752 7.26186 30.0047 7.26186C29.3342 7.26186 28.8077 6.73506 28.8077 6.06487V2.47388H24.0197V6.06487C24.0197 6.73506 23.4932 7.26186 22.8227 7.26186C22.1522 7.26186 21.6257 6.73506 21.6257 6.06487V2.47388H16.8378V6.06487C16.8378 6.73506 16.3113 7.26186 15.6408 7.26186C14.9703 7.26186 14.4438 6.73506 14.4438 6.06487V2.47388H9.65577V6.06487C9.65577 6.73506 9.12928 7.26186 8.45878 7.26186C7.78827 7.26186 7.26178 6.73506 7.26178 6.06487V2.47388H1.197C0.526491 2.47388 0 3.00037 0 3.67087V9.65586H38.3837V3.67087Z" fill="white" />
                        <path d="M18.0347 24.0198H18.3222C18.7592 23.1706 19.2523 22.3555 19.8558 21.6258H18.0347C17.3733 21.6258 16.8378 21.0902 16.8378 20.4288C16.8378 19.7673 17.3733 19.2318 18.0347 19.2318H20.4287C20.9191 19.2318 21.3377 19.5276 21.5229 19.9494C23.8162 18.012 26.7744 16.8378 30.0047 16.8378H27.6107C26.9493 16.8378 26.4137 16.3023 26.4137 15.6408C26.4137 14.9793 26.9493 14.4438 27.6107 14.4438H30.0047C30.6662 14.4438 31.2017 14.9793 31.2017 15.6408C31.2017 16.3023 30.6662 16.8378 30.0047 16.8378C33.1852 16.8378 36.1057 17.9718 38.3837 19.8558V12.0498H0V34.7927C0 35.4542 0.535531 35.9897 1.197 35.9897H18.2913C17.3689 34.1917 16.8378 32.1606 16.8378 30.0048C16.8378 28.6871 17.074 27.4315 17.4359 26.2305C17.0846 26.0219 16.8378 25.6554 16.8378 25.2168C16.8378 24.5553 17.3733 24.0198 18.0347 24.0198ZM18.0347 14.4438H20.4287C21.0902 14.4438 21.6257 14.9793 21.6257 15.6408C21.6257 16.3023 21.0902 16.8378 20.4287 16.8378H18.0347C17.3733 16.8378 16.8378 16.3023 16.8378 15.6408C16.8378 14.9793 17.3733 14.4438 18.0347 14.4438ZM10.8528 31.2017H8.45878C7.79731 31.2017 7.26178 30.6662 7.26178 30.0048C7.26178 29.3433 7.79731 28.8078 8.45878 28.8078H10.8528C11.5142 28.8078 12.0498 29.3433 12.0498 30.0048C12.0498 30.6662 11.5142 31.2017 10.8528 31.2017ZM10.8528 26.4138H8.45878C7.79731 26.4138 7.26178 25.8782 7.26178 25.2168C7.26178 24.5553 7.79731 24.0198 8.45878 24.0198H10.8528C11.5142 24.0198 12.0498 24.5553 12.0498 25.2168C12.0498 25.8782 11.5142 26.4138 10.8528 26.4138ZM10.8528 21.6258H8.45878C7.79731 21.6258 7.26178 21.0902 7.26178 20.4288C7.26178 19.7673 7.79731 19.2318 8.45878 19.2318H10.8528C11.5142 19.2318 12.0498 19.7673 12.0498 20.4288C12.0498 21.0902 11.5142 21.6258 10.8528 21.6258ZM10.8528 16.8378H8.45878C7.79731 16.8378 7.26178 16.3023 7.26178 15.6408C7.26178 14.9793 7.79731 14.4438 8.45878 14.4438H10.8528C11.5142 14.4438 12.0498 14.9793 12.0498 15.6408C12.0498 16.3023 11.5142 16.8378 10.8528 16.8378Z" fill="white" />
                        <path d="M9.65577 1.197C9.65577 0.526492 9.12928 0 8.45878 0C7.78827 0 7.26178 0.526492 7.26178 1.197V2.47379H9.65577V1.197Z" fill="white" />
                        <path d="M16.8377 1.197C16.8377 0.526492 16.3113 0 15.6408 0C14.9702 0 14.4438 0.526492 14.4438 1.197V2.47379H16.8377V1.197Z" fill="white" />
                        <path d="M24.0197 1.197C24.0197 0.526492 23.4932 0 22.8227 0C22.1522 0 21.6257 0.526492 21.6257 1.197V2.47379H24.0197V1.197Z" fill="white" />
                        <path d="M31.2017 1.197C31.2017 0.526492 30.6752 0 30.0047 0C29.3342 0 28.8077 0.526492 28.8077 1.197V2.47379H31.2017V1.197Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_13_1569">
                            <rect width="40.8575" height="40.8575" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="text-white ml-6">
                    <p>We are open monday-friday</p>
                    <h3 className="text-2xl font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex justify-center items-center max-sm:mb-5 sm:mb-5 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="41" viewBox="0 0 47 41" fill="none">
                    <path d="M36.7495 0H25.8875C20.6475 0 16.3834 4.26411 16.3834 9.50417C16.3834 14.2841 19.9302 18.2513 24.5298 18.9116V23.0816C24.5298 23.6304 24.8599 24.1264 25.3678 24.3358C25.8686 24.5448 26.4561 24.4328 26.8476 24.0415L31.8807 19.0083H36.7495C41.9895 19.0083 46.3441 14.7442 46.3441 9.50417C46.3441 4.26411 41.9895 0 36.7495 0ZM25.8875 10.8617C25.1375 10.8617 24.5298 10.2538 24.5298 9.50399C24.5298 8.75415 25.1375 8.14625 25.8875 8.14625C26.6374 8.14625 27.2453 8.75415 27.2453 9.50399C27.2453 10.2538 26.6374 10.8617 25.8875 10.8617ZM31.3185 10.8617C30.5685 10.8617 29.9608 10.2538 29.9608 9.50399C29.9608 8.75415 30.5685 8.14625 31.3185 8.14625C32.0683 8.14625 32.6762 8.75415 32.6762 9.50399C32.6762 10.2538 32.0683 10.8617 31.3185 10.8617ZM36.7495 10.8617C35.9994 10.8617 35.3917 10.2538 35.3917 9.50399C35.3917 8.75415 35.9994 8.14625 36.7495 8.14625C37.4993 8.14625 38.1072 8.75415 38.1072 9.50399C38.1072 10.2538 37.4993 10.8617 36.7495 10.8617Z" fill="#F2BA49" />
                    <path d="M30.5038 40.7322C32.7499 40.7322 34.5771 38.905 34.5771 36.6589V31.228C34.5771 30.6433 34.2031 30.1248 33.6489 29.9405L25.5216 27.225C25.1238 27.0911 24.6889 27.1521 24.3389 27.3828L20.8835 29.6859C17.224 27.941 12.8817 23.5986 11.1367 19.939L13.4398 16.4837C13.6718 16.1349 13.7302 15.6987 13.5976 15.301L10.8821 7.17366C10.6979 6.61953 10.1794 6.24561 9.59467 6.24561H4.0732C1.82714 6.24561 -1.52588e-05 8.05366 -1.52588e-05 10.2997C-1.52588e-05 25.9429 14.8607 40.7322 30.5038 40.7322Z" fill="white" />
                </svg>
                <div className="text-white ml-6">
                    <p>Have a question?</p>
                    <h3 className="text-2xl font-semibold">+968-99364737</h3>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="41" viewBox="0 0 37 41" fill="none">
                    <path d="M18.1468 7.25024C16.064 7.25024 14.3695 8.94479 14.3695 11.0275C14.3695 13.1103 16.064 14.8048 18.1468 14.8048C20.2296 14.8048 21.9241 13.1103 21.9241 11.0275C21.9241 8.94479 20.2296 7.25024 18.1468 7.25024Z" fill="white" />
                    <path d="M30.4538 30.3703C28.5368 29.8243 26.2595 29.4212 23.7812 29.1785C21.3781 32.8066 19.3021 35.4402 19.0961 35.6999C18.8663 35.9897 18.5166 36.1586 18.1468 36.1586C17.777 36.1586 17.4274 35.9897 17.1976 35.6999C16.9916 35.4402 14.9155 32.8066 12.5125 29.1785C10.0341 29.4212 7.75688 29.8243 5.83989 30.3703C1.96485 31.4742 0 33.014 0 34.9469C0 36.8798 1.96485 38.4195 5.83989 39.5234C9.14357 40.4646 13.5141 40.9828 18.1468 40.9828C22.7796 40.9828 27.1501 40.4645 30.4537 39.5235C34.3287 38.4196 36.2936 36.8799 36.2936 34.947C36.2936 33.014 34.3288 31.4742 30.4538 30.3703Z" fill="white" />
                    <path d="M18.1469 0C12.0663 0 7.11925 4.94691 7.11925 11.0277C7.11925 14.2727 9.17215 19.288 13.0561 25.5312C15.0285 28.7018 17.0152 31.4439 18.1468 32.9531C19.2815 31.4396 21.2757 28.6868 23.2501 25.5111C27.1258 19.2774 29.1745 14.2691 29.1745 11.0277C29.1745 4.94691 24.2275 0 18.1469 0ZM18.1469 17.2284C14.7279 17.2284 11.9462 14.4467 11.9462 11.0277C11.9462 7.60855 14.7279 4.82693 18.1469 4.82693C21.5659 4.82693 24.3476 7.60855 24.3476 11.0277C24.3476 14.4468 21.5659 17.2284 18.1469 17.2284Z" fill="#F2BA49" />
                </svg>
                <div className="text-white ml-6">
                    <p>Need a print? our address</p>
                    <h3 className="text-2xl font-semibold">Muscat, Sultanate of Oman</h3>
                </div>
            </div>
        </div>
    );
};

export default FindUs;