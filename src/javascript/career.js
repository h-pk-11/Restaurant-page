import '../style/career.css';
const kitchenImg = await import('../image/kitchen-1.jpg');

function career(){
    return `

        <header class="career">
            <div class="career-introduction">
                <img loading="lazy" src="${kitchenImg.default}" alt="about image">
            </div>
            <div class="career-invitation">
                <div>
                    join our team
                </div>
                <button>Apply now</button>
            </div>
        </header>


        <section class="career career-body">
            <div class="career-content">
                <p class="career-content_para">
                    <span>
                        We love hearing from excited like minded individuals interested in joining our team. Please email us a resume to <a href="#">therythms@therythms.com</a>
                    </span>
                    <span class="career-content_para-admin">
                        Admin <i>(Thank you)</i>
                    </span>
                </p>

                <p class="career-content_para">
                    <span>
                        <strong class="career-content_para-benefit">Benefits</strong>
                    </span>
                    <span>
                        At Albi we offer the following benefits to all full-time employees: 
                    </span>
                    <span>
                        Company paid health care benefits
                    </span>
                    
                    <ul class="career-content_list">
                        <li class="career-content_item">
                            100% of all full-time employees' health insurance premiums
                        </li>
                        <li class="career-content_item">
                            Paid leave policy for hourly employees
                        </li>
                        <li class="career-content_item">
                            Parental leave plan
                        </li>
                        <li class="career-content_item">
                            401K plan 
                        </li>
                        <li class="career-content_item">
                            Dining discounts at albi + YELLOW
                        </li>
                        <li class="career-content_item">
                            Somm certification reimbursements
                        </li>
                        <li class="career-content_item">
                            All Major holidays off
                        </li>
                        <li class="career-content_item">
                            Access to our Vision benefit program
                        </li>
                    </ul>
                    
                </p>

                <p class="career-content_para">
                    <span class="career-content_para_end">
                        Employee Wellness is top of mind - At Albi & YELLOW we have introduced a 3% 'Employee Wellness' service charge which allows us to cover 100% of heath premiums for employees.
                    </span>
                </p>
            </div>
        </section>

    `;
};

export default career();