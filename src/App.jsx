import React, { useState, useMemo } from "react";

const OFFERS_DATA = [{"date": "07/03/25", "title": "Registration for JP Morgan - Summer Internship for 2027 Batch students", "company": "JP Morgan Chase & Co", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineer Intern", "jd": "Attached", "eligible_branches": "CC, CS, CS (AIML), IT, DS, CSF", "eligibility_criteria": "BTech 8.5 CGPA & above, No Backlogs", "stipend": null, "ctc": null, "work_location": "Bangalore, Hyderabad, Mumbai, Pune", "last_date": "9th March 2025, End of Day", "selection_process": ". Link 1:", "link": "https://forms.gle/AjHaF8Gp8Xosq47H9", "offer_type_norm": "Summer Internship", "cgpa_min": 8.5, "stipend_num": null}, {"date": "19/06/25", "title": "Registration for Summer Internship - Trilogy Innovations", "company": "Trilogy Innovations", "offer_type": "Summer Internship", "category": "Core", "role": "Software Development Engineer Intern Company Description and JD: Attached", "jd": null, "eligible_branches": "BTech all branches", "eligibility_criteria": "BTech 6 CGPA & above, No active backlogs", "stipend": "75K pm", "ctc": "30 Lakhs p.a. + 2.5 Lakhs Annual Targeted Bonus Tentative Start Date: 11th May 2026", "work_location": "Remote", "last_date": "10 AM , 19th June 2025", "selection_process": "Dates yet to be decided", "link": "https://forms.gle/4QZXur4aZNMbH2DJ6", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": null}, {"date": "23/06/25", "title": "Goldman Sachs 2026 Summer Internship", "company": "Goldman Sachs", "offer_type": "Summer Internship", "category": "Core", "role": "Engineering Analyst", "jd": null, "eligible_branches": "BTech All branches", "eligibility_criteria": "BTech 6 CGPA & above, No Backlogs", "stipend": null, "ctc": "INR 1,950,000 per annum, prorated for the actual number of days worked less tax or other withholdings and applicable deductions as required by law or in accordance with our policy.", "work_location": "Bengaluru/Hyderabad", "last_date": null, "selection_process": null, "link": "https://hdpc.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CampusHiring/job/148695/?utm_medium=jobshare&utm_source=External+Job+Share", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": null}, {"date": "30/06/25", "title": "Goldman Sachs 2026 Summer Internship", "company": "Goldman Sachs", "offer_type": "Summer Internship", "category": "Core", "role": "Engineering Analyst", "jd": null, "eligible_branches": "BTech All branches", "eligibility_criteria": "BTech 6 CGPA & above, No Backlogs", "stipend": null, "ctc": "INR 1,950,000 per annum, prorated for the actual number of days worked less tax or other withholdings and applicable deductions as required by law or in accordance with our policy.", "work_location": "Bengaluru/Hyderabad", "last_date": null, "selection_process": null, "link": "https://hdpc.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CampusHiring/job/148695/?utm_medium=jobshare&utm_source=External+Job+Share", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": null}, {"date": "03/07/25", "title": "Microsoft Summer Internship", "company": "Microsoft", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineering Intern", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EE, EC, EI, CPS, EE (VLSI & Tech)", "eligibility_criteria": "BTech 7 CGPA & above, No Backlogs", "stipend": "125000 pm", "ctc": "About 51 Lakhs", "work_location": "PAN India – Hyderabad, Bangalore, Noida, Pune", "last_date": "10 PM, 7th July 2025", "selection_process": "(Virtual): PPT: 10th July 2025 @ 5 PM Online Test : 10th July 2025 @ 9 PM Interview process : 17th July, 9 AM onwards", "link": "https://forms.gle/DGudw8v4vcyL1zsC6", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 125000}, {"date": "15/07/25", "title": "Registration for Summer Internship - BNY", "company": "BNY", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, AIML, CSFT, MC, EC, EE, EI, CPS, EE (VLSI & Tech), ME", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No active Backlogs Open for Indian nationals only", "stipend": "75000 pm", "ctc": "21.64 LPA (Offered last year)", "work_location": "Pune, Chennai", "last_date": "9 AM, 17th July 2025", "selection_process": "Yet to be decided", "link": "https://forms.gle/SC7ybucK7Dzh7iFg8", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 75000}, {"date": "16/07/25", "title": "Registration for Summer Internship - AQR Capital", "company": "AQR Capital", "offer_type": "Summer Internship", "category": "Core", "role": "Software Developer Intern", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, AIML, CFT, MC", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No Backlogs", "stipend": "150000 pm", "ctc": "25.5 LPA", "work_location": "Bengaluru", "last_date": "9 AM, 19th July 2025", "selection_process": "(Virtual): PPT: July 24, 2025 @ 5:00 PM Online Test: July 26, 2025 @ 5:00 PM Interview: July 29, 2025 @ 9:00 AM onwards", "link": "https://forms.gle/2cWPNqjUxs4fPQa99", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 150000}, {"date": "16/07/25", "title": "Registration for Summer Internship - D E Shaw", "company": "D. E. Shaw India Pvt Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": "Global Analytics & Reporting Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, AIML, CSFT, MC, EC, EE(VLSI Design & Tech), EE, EI, CPS", "eligibility_criteria": "BTech 7 CGPA & above, No Backlogs (For CC, CS, IT, DS, AIML, CSFT, MC students) BTech 8 CGPA & above, No Backlogs (For EC, EE(VLSI Design & Tech), EE, EI, CPS students", "stipend": "180000 pm", "ctc": null, "work_location": "Hyderabad", "last_date": "3 PM, 18th July 2025", "selection_process": "PPT (Virtual): 25th July @ 06.30 PM Online Test (Virtual) : 26th July @ 8 PM Interview process (Physical): 1st and 2nd August 2025", "link": "https://forms.gle/DNyqWbUpfYVme8JQ6", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 180000}, {"date": "29/07/25", "title": "Western Digital Summer Internship", "company": "Western Digital", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Firmware Validation engineer for test development and validation of HDD/NAND FLASH storage devices. Will be part of development of test specifications, reviews, test development, failure analysis, debug, test coverage and lab infrastructure bring up for customized Western Digital embedded NAND...", "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EE, EC, EI, CPS, EE (VLSI & Tech)", "eligibility_criteria": "BTech 7.5 CGPA & above, No Backlogs", "stipend": "35000 pm + 2k food coupons", "ctc": "19.5 LPA + RSU (Offered last year)", "work_location": "PAN India", "last_date": "9 AM, 31st July 2025", "selection_process": "(Physical): PPT and Online Test : 4th August 2025 Interview process : 5th August 2025", "link": "https://forms.gle/D3ouJDun6cGHofpt5", "offer_type_norm": "Summer Internship", "cgpa_min": 7.5, "stipend_num": 35000}, {"date": "30/07/25", "title": "Registration for Summer Internship - Wellsfargo", "company": "Wellsfargo", "offer_type": "Summer Internship", "category": "Core", "role": "Technology Program Intern", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EE, EC, EI, CPS, EE (VLSI & Tech)", "eligibility_criteria": "BTech 7.5 CGPA & above, No Backlogs", "stipend": "90000 pm", "ctc": "24 LPA (Offered last year)", "work_location": "Hyderabad, Bangalore", "last_date": "10 PM, 31st July 2025", "selection_process": "(Physical): Yet to be decided", "link": "https://forms.gle/2tVAsboKqRnu2hrr7", "offer_type_norm": "Summer Internship", "cgpa_min": 7.5, "stipend_num": 90000}, {"date": "13/08/25", "title": "ITC Limited Summer Internship", "company": "ITC Limited – Foods Business Division", "offer_type": "Summer Internship", "category": "Core", "role": "Technical Management Trainee", "jd": null, "eligible_branches": "BTech CH, EI, ME", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No Backlogs", "stipend": "50000 pm", "ctc": "14 LPA", "work_location": "Across India (Including factory locations)", "last_date": "4 PM, 14th August 2025", "selection_process": "Online Test: 16th August 2025 @ 4 PM PPT & Interview (Physical): 20th/21st August 2025", "link": "https://forms.gle/xkTEpKXxXfGsyvgK8", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 50000}, {"date": "18/08/25", "title": "Registration for Summer Internship - Adobe", "company": "Adobe", "offer_type": "Summer Internship", "category": "Core", "role": "Product Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC", "eligibility_criteria": "BTech 6 CGPA & above, No Backlogs", "stipend": "1,10,000 per month", "ctc": "₹30 LPA (subject to change as per organizational policies)", "work_location": "PAN India", "last_date": "9 AM, 20th August 2025", "selection_process": "Online Test: 22nd August 2025 Interview: 26th August 2025", "link": "https://forms.gle/hxo8VuNF2stT67R29", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": 110000}, {"date": "20/08/25", "title": "Registration for Summer Internship - GE Healthcare", "company": "GE Healthcare", "offer_type": "Summer Internship", "category": "Core", "role": "EID", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, AIML, CSFT, MC, EC, EE, EI, CPS, EE (VLSI)", "eligibility_criteria": "BTech 7.5 CGPA & above, No Backlogs", "stipend": "40000 pm", "ctc": "1620000 for CS role", "work_location": "Bengaluru", "last_date": "10 AM, 21st August 2025", "selection_process": "(Physical): Online Test: Aon Technical Assessment : 23 Aug 2025 HireVue : 23 Aug 2025 Aon Behavioural Assessment : 24th Aug 2025 Interview: 1st September 2025", "link": "https://forms.gle/v1BBXkvxc65EfWWX9", "offer_type_norm": "Summer Internship", "cgpa_min": 7.5, "stipend_num": 40000}, {"date": "21/08/25", "title": "Registration for Summer Internship - Cisco", "company": "Cisco", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineer Intern", "jd": "Refer Cisco Job Portal link below", "eligible_branches": "BTech all branches", "eligibility_criteria": "BTech 6 CGPA & above, No active Backlogs", "stipend": "88000 pm Accommodation allowance: INR 10000", "ctc": null, "work_location": "Bengaluru", "last_date": "9 AM, 23rd August 2025", "selection_process": "Yet to be decided 🛑 Students are informed to apply in both the below links before the deadline to be eligible for the selection process. Kindly ensure that you are registering in both the links with the same email ID. Any student who fails to register on the below links will not be considered for...", "link": "https://forms.gle/kxzVEyR3dpC47cVMA", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": 88000}, {"date": "28/08/25", "title": "Registration for Summer Internship - Goldman Sachs", "company": "Goldman Sachs", "offer_type": "Summer Internship", "category": "Core", "role": "Summer Analyst", "jd": "and aptitude test details will be shared only to the eligible students who apply in below google form link.", "eligible_branches": "BTech CV", "eligibility_criteria": "60% (10th, 12th), BTech 6.5 CGPA & above, No Backlogs", "stipend": "INR 875,000 per annum, prorated for the actual number of days worked less tax or other withholdings and applicable deductions as required by law or in accordance with our policy.)", "ctc": "INR 875000 (Note : Internship", "work_location": "Bengaluru/Hyderabad", "last_date": "9 AM, 30th August 2025", "selection_process": null, "link": "https://forms.gle/tu3HEWtDpedRYVQf7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.5, "stipend_num": 875000}, {"date": "01/09/25", "title": "Registration for Summer Internship - Fractal Analytics", "company": "Fractal Analytics", "offer_type": "Summer Internship", "category": "Core", "role": "Imagineer Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EE, EC, EI, CPS, EE (VLSI & Tech)", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No Backlogs", "stipend": "30000 pm", "ctc": "Compensation for B.Tech: Total 3-year compensation: INR 31 lac Year 1", "work_location": "Bengaluru/Mumbai/Gurgaon/Pune/Chennai", "last_date": "9 AM, 2nd September 2025", "selection_process": "PPT - 5th September, 11 AM Online Test – 5th September, 04.30 PM Interview – 9th September, 9 AM onwards", "link": "https://forms.gle/HznLM6hT1dymSDry8", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 30000}, {"date": "12/09/25", "title": "Registration for Summer Internship - Optum", "company": "Optum", "offer_type": "Summer Internship", "category": "Core", "role": "Cybersecurity Development Intern, Technology Development Program Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC", "eligibility_criteria": "BTech 7 CGPA & above, No Backlogs", "stipend": "40000 pm", "ctc": "19.21 LPA", "work_location": "Gurugram, Hyderabad, Bangalore", "last_date": "9 AM, 16th September 2025", "selection_process": "1. Online Test – 9th October, 11.30 AM 2. Interview – 16th and 17th October 2025", "link": "https://forms.gle/hDg3mD8FBE4QxxiSA", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 40000}, {"date": "16/09/25", "title": "Registration for Summer Internship - PayPal", "company": "PayPal", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineer Intern", "jd": "Attached", "eligible_branches": "BTech CS, IT", "eligibility_criteria": "BTech 8.5 CGPA & above, No Backlogs", "stipend": null, "ctc": null, "work_location": "Chennai, Bangalore", "last_date": "9 AM, 18th September 2025", "selection_process": null, "link": "https://forms.gle/JrkiA2ZUXJh2cgFP8", "offer_type_norm": "Summer Internship", "cgpa_min": 8.5, "stipend_num": null}, {"date": "18/09/25", "title": "Registration for Summer Internship - Microsoft", "company": "Microsoft", "offer_type": "Summer Internship", "category": "Core", "role": "Associate Consultant Intern (Technology Consultant Intern)", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC", "eligibility_criteria": "85% (10th), 80% (12th), BTech 7 CGPA & above, No Backlogs", "stipend": "40000 pm", "ctc": "Base: 11,70,000; JB: 1,00,000; Variable: 0-20% on base; Stocks: USD 4000", "work_location": "Hyderabad", "last_date": null, "selection_process": "PPT – 19th September 3 PM (Link will be shared to registered students tomorrow morning) Eligible Students are informed to apply in below two links before the deadline. Registration in both links is mandatory to be eligible for the selection process. Registration link 1:...", "link": "https://forms.gle/TiMVYUyc3885axuo8", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 40000}, {"date": "23/09/25", "title": "Textron Summer Internship", "company": "Textron India Pvt Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS(AIML), CSFT, MC, EE, EC, EI, EC(VLSI), CPS, ME, IE", "eligibility_criteria": "70% (10th, 12th, Diploma) BTech 7 CGPA & above, No BL", "stipend": "25000 pm", "ctc": "6.25 LPA", "work_location": "PAN India", "last_date": "9 AM, 25th September 2025", "selection_process": "Online Test : 6 PM, 30th September Interview process (Physical): 6th October 2025", "link": "https://forms.gle/RdipfAHv1fC1cm3LA", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 25000}, {"date": "24/09/25", "title": "Registration for Summer Internship - VISA", "company": "VISA", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineering Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EE, EC (VLSI)", "eligibility_criteria": "BTech 7 CGPA & above, No Backlogs", "stipend": "90000 pm", "ctc": null, "work_location": "Bengaluru", "last_date": "3 PM, 25th September 2025", "selection_process": "(Virtual): Online Test (In Labs): 27th September Interview: 7th October 2025", "link": "https://forms.gle/KqANRUq2Ly2WKrFD9", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 90000}, {"date": "25/09/25", "title": "Registration for Summer Internship - Kenvue", "company": "Kenvue Solutions India Pvt. Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": "Tech and Data Roles", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EC, EE, EI, CPS, EC (VLSI), ME, IE, CH", "eligibility_criteria": "75% (10th, 12th, Diploma) BTech 6.5 CGPA & above, No BL", "stipend": "75000 pm", "ctc": "15 lakhs approx. + 4 lakhs joining bonus (split over 2 years)", "work_location": "Bengaluru", "last_date": "28th September 2025", "selection_process": ".", "link": "https://forms.gle/nj46cvvmmaBB6Sgk7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.5, "stipend_num": 75000}, {"date": "27/09/25", "title": "Oracle FSS Summer Internship Registration", "company": "Oracle Financial Services Software Limited (OFSS)", "offer_type": "Summer Internship", "category": "Core", "role": "Project Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EC, EE, EI, CPS, EC (VLSI)", "eligibility_criteria": "BTech 7.5 CGPA & above, No Backlogs Only candidates eligible to work in India (by citizenship, OCI status, or nationality status permitted for work in India) may apply for this position. Oracle does not offer or support any work visa / sponsorship for this position.", "stipend": "60000 pm", "ctc": "Annual Gross Pay - INR 1,523,000 Per Annum Total Year 1 Earning Potential- INR 21,36,442 Additional Components Stocks with vesting period; USD 16,000 40% redemption after 1st Year, 30% redemption after 2nd Year, 20% redemption after 3rd Year & 10% redemption after completion of 4th Year Variable...", "work_location": "Bangalore, Mumbai, Pune, Chennai", "last_date": "9 AM, 29th September 2025", "selection_process": "Online Test (Virtual) – 30th September, 5 PM PPT followed by Interview (Physical) – 6th October 2025", "link": "https://forms.gle/fUfFdFr1DA5uYrd5A", "offer_type_norm": "Summer Internship", "cgpa_min": 7.5, "stipend_num": 60000}, {"date": "17/10/25", "title": "Registration for Summer Internship - Boeing", "company": "Boeing India", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EE, EI, CPS, EC (VLSI), AE, ME, IE, MT", "eligibility_criteria": "70% (10th, 12th, Diploma) BTech 7 CGPA & above, No BL", "stipend": "40000 pm", "ctc": "750,000 Base + Retrials +200,000 JB = 10,88,038", "work_location": "Bangalore/Chennai", "last_date": "10 AM, 25th October 2025", "selection_process": "1. Online test: 30th October 2025 2. Interview process : 31st October 2025", "link": "https://forms.gle/1xPhV9S3UJ3Kp2766", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 40000}, {"date": "24/10/25", "title": "Registration for Summer Internship - Accenture", "company": "Accenture", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": null, "eligible_branches": "BTech all Specialization", "eligibility_criteria": "BTech 5 CGPA & above, No active backlogs", "stipend": "16000 per month", "ctc": null, "work_location": "PAN India", "last_date": "9 AM, 28th October 2025", "selection_process": "Yet to be decided", "link": "https://forms.gle/7HAWh5c7nzqTDrgu9", "offer_type_norm": "Summer Internship", "cgpa_min": 5.0, "stipend_num": 16000}, {"date": "03/11/25", "title": "Registration for Internship - Analog Device (1 year internship)", "company": "Analog Device", "offer_type": "One year Internship from July 2026 to June 2027", "category": "Core", "role": "Embedded Software Engineer Intern", "jd": "Attached", "eligible_branches": "BTech EC, EE, EC (VLSI)", "eligibility_criteria": "BTech 7.5 CGPA and above, No Backlogs", "stipend": "40000 pm", "ctc": "Attached", "work_location": "Bengaluru", "last_date": "3 PM, 3rd November 2025", "selection_process": "Online Test – schedule will be communicated soon Interview (Physical) – 6th November 2025", "link": "https://forms.gle/G1LWNSaaASC71mKi9", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 7.5, "stipend_num": 40000}, {"date": "09/01/26", "title": "Microsoft - Summer Internship (Data Science Intern)", "company": "Microsoft", "offer_type": "Summer Internship", "category": "Core", "role": "Data Science Intern", "jd": null, "eligible_branches": null, "eligibility_criteria": "BTech CGPA 7 and above No backlogs", "stipend": "₹1,25,000 per month", "ctc": "~₹51 LPA", "work_location": "PAN India", "last_date": "13th January 2026", "selection_process": "Online Test: 16th January 2026 Interview: 23rd January 2026 College", "link": "https://forms.gle/3zXM7SuRFMUK3Ex3A", "offer_type_norm": "Summer Internship", "cgpa_min": null, "stipend_num": 125000}, {"date": "12/01/26", "title": "Registration for Summer Internship - Ensemble Health Partners", "company": "Ensemble Health Partners India Pvt Ltd", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineering Intern", "jd": "Attached", "eligible_branches": "BTech IT, CC", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No active Backlogs", "stipend": "25000 pm", "ctc": null, "work_location": "Hyderabad", "last_date": "10 AM, 13th January 2026 <This message was edited>", "selection_process": "Yet to be decided", "link": "https://forms.gle/GwzECWJK8aqhLtrUA", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 25000}, {"date": "14/01/26", "title": "Registration for Summer Internship - BNY", "company": "BNY", "offer_type": "Summer Internship", "category": "Core", "role": "Data Science Intern", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, DS, AIML, CSFT, MC, EC, EE, EI, CPS, EE (VLSI & Tech), ME, MT", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No active Backlogs Open for Indian nationals only", "stipend": "75000 pm", "ctc": "21.64 LPA (Offered last year)", "work_location": "Pune, Chennai", "last_date": "2 PM, 16th January 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/BaMr41EmbZDd5wMy6", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 75000}, {"date": "16/01/26", "title": "Reliance Industries Ltd. - Summer Internship 2026", "company": "Reliance Industries Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": "Refer to the registration link for details", "jd": null, "eligible_branches": "BTech CH, ME, EE, EI", "eligibility_criteria": "- Minimum 60% in 10th, 12th, or Diploma - BTech CGPA 6 and above - No active backlogs", "stipend": "₹30,000 per month", "ctc": null, "work_location": "PAN India", "last_date": "16th January 2026", "selection_process": "Refer to the registration link for the detailed timeline", "link": "https://forms.gle/D7R9gjUttQDnqyqp9", "offer_type_norm": "Summer Internship", "cgpa_min": null, "stipend_num": 30000}, {"date": "19/01/26", "title": "Registration for Summer Internship - Microsoft", "company": "Microsoft", "offer_type": "Summer Internship", "category": "Core", "role": "Software Engineering Intern", "jd": null, "eligible_branches": "BTech CC, CS, IT, DS, CS (AIML), CSFT, MC, EE, EC, EI, CPS, EE (VLSI & Tech)", "eligibility_criteria": "BTech 7 CGPA & above, No Backlogs", "stipend": "125000 pm", "ctc": "5600000 CTC including JB & Stocks", "work_location": "PAN India", "last_date": "20th January 2026 Registration in both the above links is mandatory to be eligible for the selection process.", "selection_process": "Yet to be decided Registrattion Link 1: https://forms.gle/Cn8pDnvTJF1AhRmNA Registration Link 2: Microsoft Career Portal Link: https://apply.careers.microsoft.com/careers?query=200005595&start=0&location=India&pid=1970393556625300&sort_by=relevance&filter_include_remote=1 JOB Id: 200005595", "link": "https://forms.gle/Cn8pDnvTJF1AhRmNA", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 125000}, {"date": "27/01/26", "title": "Registration for Internship - Orangewood Labs", "company": "Orangewood Labs", "offer_type": "6-Month Internship (June/July 2026) (May be extended up to one year)", "category": "Core", "role": "- Jr. Business Development and Operations Intern - Jr. Project Manager Intern - Jr. Robotics Engineer Intern", "jd": "Attached below", "eligible_branches": "BTech MT", "eligibility_criteria": "- 60% (10th, 12th, Diploma) - BTech CGPA 6 and above - No active backlogs", "stipend": "₹15,000 – ₹20,000 per month", "ctc": null, "work_location": "Noida", "last_date": "10:00 AM, 28th January 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/fufqw3rGTrqQ8nSNA", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": null, "stipend_num": 15000}, {"date": "28/01/26", "title": "Registration for Internship - Amazon (6 months)", "company": "Amazon", "offer_type": "6 month Internship from July 2026", "category": "Core", "role": null, "jd": "Attached", "eligible_branches": "BTech CS, IT, DS, CC, CS (AIML), CSFT, MC, EC, EE, EI, CPS, EC (VLSI)", "eligibility_criteria": "BTech 6.5 CGPA and above, No Backlogs", "stipend": null, "ctc": null, "work_location": "PAN India", "last_date": "4 PM, 29th January 2026", "selection_process": null, "link": "https://forms.gle/LUJ9PRefExvbN2N8A", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.5, "stipend_num": null}, {"date": "30/01/26", "title": "Registration for Internship - Infineon (11 months)", "company": "Infineon Technologies India Pvt Ltd", "offer_type": "11 months Internship from July 2026 to May 2027", "category": "Core", "role": null, "jd": "Attached Apprenticeship for duration of 11 Months effective from 1 July 2026 to 31 May 2027. Selected students will work on live projects across R&D and departments such as Automotive, Post-Silicon Validation, Connected Secure Systems, Power Sensor Systems, Design Enabling Services, and IT. Focus...", "eligible_branches": "BTech DS, CS (AIML), EC, EE, EI, CPS, EC (VLSI)", "eligibility_criteria": "70% (10th, 12th, Diploma) BTech 7 CGPA and above, No Backlogs", "stipend": "43000 pm", "ctc": null, "work_location": "Bengaluru", "last_date": "11 AM, 31st January 2026", "selection_process": "Online test will be conducted either on 31st Jan or 1st Feb 5th & 6th February – Interview (Physical)", "link": "https://forms.gle/1JmdarFVY19Jboyx8", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 7.0, "stipend_num": 43000}, {"date": "31/01/26", "title": "Registration for Summer Internship - Healthium", "company": "Healthium", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Looking for Sales / Product Specialist / SCM / Manufacturing / Commercial Operations roles", "eligible_branches": "BTech BM", "eligibility_criteria": "BTech 6 CGPA & above, No Backlogs", "stipend": "30000 pm", "ctc": null, "work_location": "PAN India", "last_date": "9 AM, 2nd February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/cfbFT6wZ2EHK7JhJ7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": 30000}, {"date": "31/01/26", "title": "Registration for Summer Internship - Webfinex Techfusion Pvt. Ltd.", "company": "Webfinex Techfusion Pvt. Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": "Frontend Developer/Backend Developer", "jd": null, "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC", "eligibility_criteria": "60% (10th, 12th, Diploma), BTech 6 CGPA & above, No Backlogs", "stipend": "25000 pm", "ctc": "Min 9 LPA", "work_location": "Bangalore", "last_date": "9 AM, 2nd February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/tKfgofvjGBy9EbKD7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": 25000}, {"date": "03/02/26", "title": "Registration for Internship - Intel", "company": "Intel", "offer_type": "One year Internship from June/July 2026", "category": "Core", "role": "Hardware Intern", "jd": null, "eligible_branches": "BTech EC, EE, EI, CPS, EC (VLSI)", "eligibility_criteria": "BTech 7 CGPA and above, No Backlogs", "stipend": "45000 pm", "ctc": null, "work_location": "Bengaluru", "last_date": "10 AM, 4th February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/WkcrsYBKn85Vwkof7", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 7.0, "stipend_num": 45000}, {"date": "10/02/26", "title": "Registration for Internship - STMicroelectronics", "company": "STMicroelectronics", "offer_type": "12 month Internship from June/July 2026", "category": "Core", "role": null, "jd": null, "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EC (VLSI), EE, EI, CPS", "eligibility_criteria": "65% (10th,12th, Diploma), BTech 6.5 CGPA and above, No Backlogs", "stipend": "40000 pm", "ctc": null, "work_location": "Greater Noida", "last_date": "2 PM, 11th February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/Xmf8Hu8emqKDL5cp6", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 6.5, "stipend_num": 40000}, {"date": "12/02/26", "title": "Registration for Internship - Siemens (6 months)", "company": "Siemens Technology & Services Pvt. Ltd.,", "offer_type": "6 month Internship from June/July 2026", "category": "Core", "role": "Intern", "jd": "Attached", "eligible_branches": "BTech CS, IT, DS, CC, CS (AIML)", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA and above, No Backlogs", "stipend": "25000 pm", "ctc": null, "work_location": "Mumbai/Pune", "last_date": "11 AM, 13th February 2026", "selection_process": "(Physical): Yet to be decided", "link": "https://forms.gle/kLPhFAT9oLrjc2bM8", "offer_type_norm": "6-Month Internship", "cgpa_min": 7.0, "stipend_num": 25000}, {"date": "13/02/26", "title": "Registration for Internship - AMD", "company": "AMD India PVT LTD", "offer_type": "10 to 12 month Internship from June 2026", "category": "Core", "role": null, "jd": "Attached", "eligible_branches": "BTech CC, CS, IT DS, CS (AIML), CSFT, MC, EC, EE, EC (VLSI), EI, CPS", "eligibility_criteria": "70% (10th, 12th, Diploma) BTech 7.5 CGPA and above, No Backlogs Only candidates eligible to work in India (by citizenship, OCI status, or nationality status permitted for work in India) may apply for this position. AMD does not offer or support any work visa / sponsorship for this position. The...", "stipend": "40000 pm", "ctc": null, "work_location": "Bengaluru, Hyderabad, Delhi", "last_date": "9 AM, 16th February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/uEZtQL8P6SBdJovk8", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 7.5, "stipend_num": 40000}, {"date": "18/02/26", "title": "Registration for Summer Internship - Maruti Suzuki", "company": "Maruti Suzuki India Ltd.", "offer_type": "Summer Internship", "category": "Core", "role": "STEP Intern", "jd": null, "eligible_branches": "BTech ME, MT", "eligibility_criteria": "65% (10th, 12th, Diploma), BTech 6.5 CGPA & above, No active Backlogs", "stipend": "35000 pm", "ctc": null, "work_location": "Gurgaon / Manesar / Rohtak/ Bangalore or any other MSIL location PAN India on business need (Candidates must be open to relocate)", "last_date": "10 AM, 19th February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/KgcNoAEHZPJ662LT9", "offer_type_norm": "Summer Internship", "cgpa_min": 6.5, "stipend_num": 35000}, {"date": "20/02/26", "title": "Healthium - Summer Internship Registration", "company": "Healthium", "offer_type": "Summer Internship", "category": "Core Job Roles: Sales / Product Specialist / SCM / Manufacturing / Commercial Operations", "role": null, "jd": null, "eligible_branches": "BTech IE", "eligibility_criteria": "BTech 6 CGPA & above, No Backlogs", "stipend": "20,000 PM", "ctc": null, "work_location": "PAN India", "last_date": "9:00 AM, 23rd February 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/cfbFT6wZ2EHK7JhJ7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": 20000}, {"date": "28/02/26", "title": "Registration for Internship - Atomgrid (6 months)", "company": "Atomgrid", "offer_type": "6 month Internship from June/July 2026", "category": "Core", "role": "Intern – Business Initiatives", "jd": null, "eligible_branches": "BTech CH, BT", "eligibility_criteria": "BTech 6 CGPA and above, No Backlogs", "stipend": "30000 pm", "ctc": null, "work_location": "Bangalore", "last_date": "10 AM, 3rd March 2026", "selection_process": null, "link": "https://forms.gle/cwoj63jWPbTtaQ2N9", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.0, "stipend_num": 30000}, {"date": "04/03/26", "title": "Registration for Summer Internship - TCS Research", "company": "TCS Research", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "watch the following videos to know what they do. Videos: - TCS Research Website: https://www.tcs.com/what-we-do/research Website URLs: - The work we do (samples): White papers: https://www.tcs.com/what-we-do/research/white-paper/accessibility-paradigm-inclusive-equitable-world...", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EC (VLSI), EE, EI, CPS", "eligibility_criteria": "BTech 8 CGPA & above, No Backlogs", "stipend": "20000 pm", "ctc": null, "work_location": "PAN India", "last_date": "2 PM, 5th March 2026", "selection_process": "Yet to be confirmed", "link": "https://forms.gle/7qNsKSmYXaZNXSs17", "offer_type_norm": "Summer Internship", "cgpa_min": 8.0, "stipend_num": 20000}, {"date": "07/03/26", "title": "Registration for Summer Internship - Tata Motors", "company": "Tata Motors", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Students with a passion to do projects in AI/ML and who reside in and around Pune can apply.", "eligible_branches": "BTech CS, CS(AIML)", "eligibility_criteria": "BTech 6 CGPA & above, No BL", "stipend": "Unpaid (Free Meals and transport)", "ctc": null, "work_location": "Pune", "last_date": "9 AM, 9th March 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/3ZfHM2hKGrbhRUQd7", "offer_type_norm": "Summer Internship", "cgpa_min": 6.0, "stipend_num": null}, {"date": "07/03/26", "title": "Registration for Internship - Uber (6 months)", "company": "Uber", "offer_type": "6 month Internship from July to Dec 2026", "category": "Core", "role": "Data Analytics Intern", "jd": "Attached", "eligible_branches": "BTech EC, EE, EI, EC (VLSI)", "eligibility_criteria": "BTech 7.5 CGPA and above, No Backlogs", "stipend": "75,095/month (Rs.25,000 housing stipend included) + Uber credits", "ctc": null, "work_location": "Hyderabad", "last_date": "12 noon, 9th March 2026", "selection_process": ". Links to register: Link 1 - https://forms.gle/xjqAKh843iGFkpoQ8 Link 2 - https://university-uber.icims.com/jobs/156558/job?mobile=false&width=1270&height=500&bga=true&needsRedirect=false&jan1offset=330&jun1offset=330", "link": "https://forms.gle/xjqAKh843iGFkpoQ8", "offer_type_norm": "6-Month Internship", "cgpa_min": 7.5, "stipend_num": 75095}, {"date": "16/03/26", "title": "Registration for Internship - Siemens (6 months)", "company": "Siemens Technology & Services Pvt. Ltd.,", "offer_type": "6 month Internship from June/July 2026", "category": "Core", "role": "Intern", "jd": "Attached", "eligible_branches": "BTech CS, IT, DS, CC, CS (AIML)", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA and above, No Backlogs", "stipend": "25000 pm", "ctc": null, "work_location": "Chennai/Pune", "last_date": "11 AM, 18th March 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/nyS4srCa5NkSAN7AA", "offer_type_norm": "6-Month Internship", "cgpa_min": 7.0, "stipend_num": 25000}, {"date": "18/03/26", "title": "Registration for JP Morgan - Full time opportunity for 2027 Batch students", "company": "JP Morgan Chase & Co", "offer_type": "Placement (SPOT OFFER) (If placed, Students will not be allowed for further placement/internship process through campus during final year – As per placement guidelines)", "category": "Core", "role": "Software Engineer Job Description and application Guide: Attached", "jd": "and application Guide: Attached", "eligible_branches": "CC, CS, IT, CS (AIML), DS, CSFT", "eligibility_criteria": "BTech 8.5 CGPA & above, No active Backlogs", "stipend": null, "ctc": null, "work_location": "Bangalore, Hyderabad, Mumbai, Pune", "last_date": "19th March 2026", "selection_process": ". Link 1:", "link": "https://forms.gle/oRgyDLaKE4Jekt2L8", "offer_type_norm": "Full-Time Placement", "cgpa_min": 8.5, "stipend_num": null}, {"date": "19/03/26", "title": "Registration for Internship - POSHA", "company": "POSHA", "offer_type": "6 to 12 month internship from June/July 2026", "category": "Core", "role": null, "jd": "Candidates should have relevant project work or hands-on experience aligned with the role (robotics, systems, mechanical design, electronics, etc.). Strong problem-solving skills and practical exposure will be preferred. Mechanical Engineering Intern:...", "eligible_branches": "BTech EC, EC (VLSI), EE, EI, CPS, MT, ME, IE", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA and above, No Backlogs", "stipend": "35000 to 50000 pm", "ctc": "4 to 9 LPA (indicative, based on role and performance)", "work_location": "Bangalore", "last_date": "9 AM, 23rd March 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/rBz6mCs8HAdMrswj8", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 7.0, "stipend_num": 35000}, {"date": "20/03/26", "title": "Registration for Summer Internship - Posha", "company": "Posha", "offer_type": "Summer Internship", "category": "Core", "role": null, "jd": "Candidates should have relevant project work or hands-on experience aligned with the role (robotics, systems, etc.). Strong problem-solving skills and practical exposure will be preferred. Systems Engineering Intern:...", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA & above, No active Backlogs", "stipend": "35000 to 50000mp", "ctc": "4 to 9 LPA (indicative, based on role and performance)", "work_location": "Bangalore", "last_date": "9 AM, 23rd March 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/8ocMK8YSAZvShCyg9", "offer_type_norm": "Summer Internship", "cgpa_min": 7.0, "stipend_num": 35000}, {"date": "31/03/26", "title": "Registration for Internship - Autodesk (6 months)", "company": "Autodesk", "offer_type": "6 month Internship from June/July 2026", "category": "Core", "role": "Software Development Engineer Intern, Software QA Engineer Intern", "jd": "Attached", "eligible_branches": "BTech CS, IT, DS, CC, CS (AIML), CSFT, MC, CV, ME, MT, AE", "eligibility_criteria": "BTech 6 CGPA and above, No Backlogs", "stipend": "For SDE Intern Roles – 55,000 INR per month For QA Intern Role – 45,000 INR per month", "ctc": null, "work_location": "Bangalore, Pune", "last_date": "2nd April 2026", "selection_process": ".", "link": "https://forms.gle/xWjCvYa9SbaPtS1w6", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.0, "stipend_num": 55000}, {"date": "09/04/26", "title": "Registration for Internship - Myntra (6 month)", "company": "Myntra", "offer_type": "6 month Internship from July 2026", "category": "Core", "role": "Software Development Engineer Intern", "jd": null, "eligible_branches": "BTech CS, IT, CS (AIML)", "eligibility_criteria": "BTech 6 CGPA and above, No Backlogs", "stipend": "70000 pm", "ctc": null, "work_location": "Bangalore", "last_date": "10 AM, 14th April 2026", "selection_process": "Registration - Open till 14th April, 10 AM Virtual Pre-Placement Talk - 10th April (5 PM - 6 PM) - PPT link shared below Online Assessment Round - 15th April Functional Interview Rounds - 20th April to 24th April Pre-Placement Talk Link: https://myntra.zoom.us/j/84246796192 Passcode: 878699", "link": "https://forms.gle/xDk3TS4s2gZkQidY7", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.0, "stipend_num": 70000}, {"date": "13/04/26", "title": "Registration for Internship - Myntra (6 month)", "company": "Myntra", "offer_type": "6 month Internship from July 2026", "category": "Core", "role": "Business Functions Intern", "jd": null, "eligible_branches": "BTech all branches", "eligibility_criteria": "BTech 6 CGPA and above, No Backlogs", "stipend": "30000 pm", "ctc": null, "work_location": "Bangalore", "last_date": "10 AM, 16th April 2026", "selection_process": "Registration Open till 16 April, 10 AM Virtual Pre-Placement Talk: 14 April, 5 PM - 6 PM (PPT Link will be shared soon) Online Assessment Round - 19 April Virtual Functional Interview Rounds: 22 April - 24 April The Registration Link 1 contains all the important details, so please review it. Only...", "link": "https://forms.gle/CvxU7RSmry5JzDnj6", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.0, "stipend_num": 30000}, {"date": "05/05/26", "title": "Registration for Internship - Nokia", "company": "Nokia", "offer_type": "11 month Internship from June/July 2026", "category": "Core", "role": null, "jd": null, "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EC (VLSI), EE, EI, CPS", "eligibility_criteria": "BTech 6.5 CGPA and above, No Backlogs", "stipend": "30000 pm", "ctc": null, "work_location": "PAN India", "last_date": "2 PM, 6th May 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/eMtMhS39uih1q4EX7", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 6.5, "stipend_num": 30000}, {"date": "06/05/26", "title": "Registration for Internship - Plivo", "company": "Plivo", "offer_type": "12 months Internship from June/July 2026", "category": "Core", "role": "Forward Deployed Engineer", "jd": "Attached", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EC, EC (VLSI), EE, EI, CPS", "eligibility_criteria": "BTech 6.5 CGPA and above, No Backlogs", "stipend": "40000 pm", "ctc": "14 LPA", "work_location": "Bangalore", "last_date": "10 AM, 9th May 2026", "selection_process": "16th May 2026 (Physical drive at MIT - PPT followed by test and Group Discussion) Interview for the shortlisted candidates will be conducted at Plivo Bangalore office. Date for the same is yet to be decided.", "link": "https://forms.gle/dEzsBqgV54CTJgtE6", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 6.0, "stipend_num": 40000}, {"date": "09/05/26", "title": "Registration for Placement - TCS", "company": "TCS", "offer_type": "Placement", "category": "ITES / Core (Spot Offer) Please note that Ninja offer will be considered as ITES offer. Digital and Prime offer will be Placement (Spot offer).", "role": null, "jd": null, "eligible_branches": "All B.Tech Braches (2027 batch) Important Points: Students are supposed to apply in TCS Registration link. Refer attachment for details. Apply using your Gmail ID only not Institute Email ID. Once you complete the registration, enter details in below google form shared before the deadline. It is mandatory to apply in both links to be eligible for the selection process. Candidates will be assessed and shortlisted for the attached roles based on their overall performance across all stages of the selection process.", "eligibility_criteria": "60% (10th, 12th, Dip), 6 CGPA & above, one backlog allowed Students should complete the TCS application form first (Refer attached word doc for the link & guidelines to register) and then apply in below link as you are supposed to provide TCS Reference ID. The assessment and interview process will...", "stipend": null, "ctc": null, "work_location": "Multiple (on campus assessment)", "last_date": "15th May 2026 Note: As per placement guidelines, once the student registers for a particular company, it is mandatory to take the online test and appear for entire selection process failing which student will not be allowed for further placement processes. image omitted", "selection_process": ". Candidates will be assessed and shortlisted for the attached roles based on their overall performance across all stages of the selection process.", "link": "https://forms.gle/LRRgr7Ts9ugKWcat9", "offer_type_norm": "Full-Time Placement", "cgpa_min": 6.0, "stipend_num": null}, {"date": "12/05/26", "title": "Registration for Placement - TCS", "company": "TCS", "offer_type": "Placement", "category": "ITES", "role": null, "jd": null, "eligible_branches": "All B.Tech Braches (2027 batch) Important Points: Students are supposed to apply in TCS Registration link. Refer attachment for details. Apply using your Gmail ID only not Institute Email ID. Once you complete the registration, enter details in below google form shared before the deadline. It is mandatory to apply in both links to be eligible for the selection process. Candidates will be assessed and shortlisted for the attached roles based on their overall performance across all stages of the selection process.", "eligibility_criteria": "60% (10th, 12th, Dip), 6 CGPA & above, one backlog allowed Students should complete the TCS application form first (Refer attached word doc for guidelines to register) and then apply in below link as you are supposed to provide TCS Reference ID. The assessment and interview process will be...", "stipend": null, "ctc": null, "work_location": "Multiple (on campus assessment)", "last_date": "15th May 2026 Note: As per placement guidelines, once the student registers for a particular company, it is mandatory to take the online test and appear for entire selection process failing which student will not be allowed for further placement processes. image omitted", "selection_process": ". Candidates will be assessed and shortlisted for the attached roles based on their overall performance across all stages of the selection process.", "link": "https://forms.gle/LRRgr7Ts9ugKWcat9", "offer_type_norm": "Full-Time Placement", "cgpa_min": 6.0, "stipend_num": null}, {"date": "18/05/26", "title": "Registration for Internship - TruEstate", "company": "TruEstate", "offer_type": "12 months Internship from June/July 2026", "category": "Core", "role": "Product Management Intern", "jd": "Attached This role offers hands-on exposure to: 0→1 product development in an AI-first environment Rapid AI-powered prototyping and experimentation PRD creation, user stories, and structured product documentation Agile sprint execution, backlog management, and Jira workflows Product strategy,...", "eligible_branches": "BTech all branches", "eligibility_criteria": "BTech 6 CGPA & above, No active Backlogs", "stipend": "30000 pm", "ctc": "₹10 LPA to ₹12 LPA", "work_location": "Bangalore", "last_date": "2 PM, 19th May 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/Kth6eghk3vDPBVJS8", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 6.0, "stipend_num": 30000}, {"date": "21/05/26", "title": "Registration for Internship - Forbes Marshall (6 months)", "company": "Forbes Marshall", "offer_type": "6 month Internship from July to Dec 2026", "category": "Core", "role": null, "jd": "As per project", "eligible_branches": "BTech CH, ME, IE", "eligibility_criteria": "BTech 6 CGPA and above, No Backlogs", "stipend": "22000 pm", "ctc": null, "work_location": "Kasarwadi or Chakan plant, Pune", "last_date": "3 PM, 22nd May 2026", "selection_process": null, "link": "https://forms.gle/wYUj8yaggPLMu2r27", "offer_type_norm": "6-Month Internship", "cgpa_min": 6.0, "stipend_num": 22000}, {"date": "27/05/26", "title": "Registration for Fulltime Opportunity: Open UP Construction", "company": "Open UP Construction", "offer_type": "Fulltime", "category": "Core Spot", "role": "Site Engineering / Design Engineering", "jd": null, "eligible_branches": "BTech Civil", "eligibility_criteria": "70% (10th, 12th, Diploma), BTech 7 CGPA and above, No Backlogs", "stipend": null, "ctc": "36 LPA", "work_location": "JAPAN", "last_date": "10:00 AM, 29th May 2026", "selection_process": "Yet to be decided Selected students will have to undergo Japanese language training for 3 months. Upon completion of the training, candidates must clear the assessment process. Offer letters will be rolled out to candidates who successfully clear the assessment. The training program will be...", "link": "https://forms.gle/BhBG3TDzFq93VEdM8", "offer_type_norm": "Full-Time Placement", "cgpa_min": 7.0, "stipend_num": null}, {"date": "03/06/26", "title": "Registration for Internship - ABB", "company": "ABB", "offer_type": "11 months Internship from July 2026", "category": "Core", "role": "Multiple roles", "jd": "JD will be provided to the shortlisted students before the interview", "eligible_branches": "BTech CC, CS, IT, CS (AIML), DS, CSFT, MC, EE", "eligibility_criteria": "60% (10th, 12th, Diploma), BTech 6 CGPA and above, No Backlogs", "stipend": "30000 pm", "ctc": "No Conversion", "work_location": "Bangalore", "last_date": "2 PM, 5th June 2026", "selection_process": "Yet to be decided", "link": "https://forms.gle/aUQq8aJFNGkZKahk8", "offer_type_norm": "Long-term Internship (11-12 months)", "cgpa_min": 6.0, "stipend_num": 30000}, {"date": "19/06/26", "title": "Registration for Internship - OpenText (6 month)", "company": "OpenText", "offer_type": "6 months starting from Aug 2026", "category": "Core", "role": "Intern", "jd": "Key Program Highlights Hands-on exposure to enterprise-grade products with global impact Structured mentorship and continuous upskilling through internal programs Equal opportunity to be considered for full-time roles based on performance and business requirements (further details shared during the...", "eligible_branches": "CC, CS, IT, DS, CS(AI/ML), CSFT, MC, EC, EC(VLSI)", "eligibility_criteria": null, "stipend": "25000", "ctc": null, "work_location": "Hyderabad or Bangalore(Students should be open to both locations)", "last_date": "10 AM, 20th June 2026", "selection_process": "Pre-placement Talk (PPT) Coding assessment (Duration - 60 mins) Technical & Managerial Interviews (2 – 3 rounds) HR Interview", "link": "https://forms.gle/5eroXtZFUrwgENDM8", "offer_type_norm": "6-Month Internship", "cgpa_min": null, "stipend_num": 25000}];

const TYPE_COLORS = {
  "Summer Internship": "#1d6b54",
  "6-Month Internship": "#a8501f",
  "Long-term Internship (11-12 months)": "#5b4b9c",
  "Full-Time Placement": "#9c2b2b",
  "Other Internship": "#555555",
  "Other": "#555555",
};

function parseDate(d) {
  // dd/mm/yy
  const [dd, mm, yy] = d.split("/").map(Number);
  return new Date(2000 + yy, mm - 1, dd);
}

function fmtDate(d) {
  const dt = parseDate(d);
  return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function uniqueBranches(records) {
  const set = new Set();
  records.forEach((r) => {
    if (!r.eligible_branches) return;
    const txt = r.eligible_branches.replace(/BTech/gi, "").replace(/all branches/gi, "ALL");
    txt.split(/[,/]/).forEach((b) => {
      const t = b.trim().replace(/^&\s*/, "");
      if (t && t.length <= 12 && !/eligib/i.test(t)) set.add(t);
    });
  });
  return Array.from(set).sort();
}

export default function App() {
  const records = OFFERS_DATA;
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [branchFilter, setBranchFilter] = useState("All");
  const [minCgpa, setMinCgpa] = useState(10);
  const [sortBy, setSortBy] = useState("date_desc");
  const [expanded, setExpanded] = useState(null);

  const offerTypes = useMemo(() => {
    const set = new Set(records.map((r) => r.offer_type_norm || "Other"));
    return ["All", ...Array.from(set)];
  }, [records]);

  const branches = useMemo(() => ["All", ...uniqueBranches(records)], [records]);

  const filtered = useMemo(() => {
    let rows = records.filter((r) => {
      if (typeFilter !== "All" && (r.offer_type_norm || "Other") !== typeFilter) return false;
      if (branchFilter !== "All") {
        const eb = (r.eligible_branches || "").toLowerCase();
        const allB = /all branch|all specialization/i.test(eb);
        if (!allB && !eb.includes(branchFilter.toLowerCase())) return false;
      }
      if (r.cgpa_min != null && r.cgpa_min > minCgpa) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = `${r.company} ${r.role} ${r.title}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    rows = rows.slice().sort((a, b) => {
      if (sortBy === "date_desc") return parseDate(b.date) - parseDate(a.date);
      if (sortBy === "date_asc") return parseDate(a.date) - parseDate(b.date);
      if (sortBy === "stipend_desc") return (b.stipend_num || 0) - (a.stipend_num || 0);
      if (sortBy === "stipend_asc") {
        const av = a.stipend_num == null ? Infinity : a.stipend_num;
        const bv = b.stipend_num == null ? Infinity : b.stipend_num;
        return av - bv;
      }
      if (sortBy === "cgpa_asc") {
        const av = a.cgpa_min == null ? Infinity : a.cgpa_min;
        const bv = b.cgpa_min == null ? Infinity : b.cgpa_min;
        return av - bv;
      }
      return 0;
    });
    return rows;
  }, [records, typeFilter, branchFilter, minCgpa, query, sortBy]);

  const stats = useMemo(() => {
    const companies = new Set(records.map((r) => r.company));
    const stipends = records.map((r) => r.stipend_num).filter(Boolean);
    const avgStipend = stipends.length
      ? Math.round(stipends.reduce((a, b) => a + b, 0) / stipends.length)
      : 0;
    const summerCount = records.filter((r) => r.offer_type_norm === "Summer Internship").length;
    const placementCount = records.filter((r) => r.offer_type_norm === "Full-Time Placement").length;
    return {
      total: records.length,
      companies: companies.size,
      avgStipend,
      summerCount,
      placementCount,
    };
  }, [records]);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .pd-row:hover { background: #f4f1ea !important; }
        .pd-card-anim { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .pd-card-anim:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
        input[type=range] { accent-color: #1d6b54; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-thumb { background: #c9c2b2; border-radius: 4px; }
      `}</style>

      <div style={styles.header}>
        <div>
          <div style={styles.eyebrow}>MIT MANIPAL · 2027 BATCH</div>
          <h1 style={styles.h1}>Placement &amp; Internship Board</h1>
          <p style={styles.sub}>
            {stats.total} company offers logged across {stats.companies} recruiters &middot; parsed straight from
            the placement WhatsApp group
          </p>
        </div>
        <div style={styles.statRow}>
          <StatCard label="Offers" value={stats.total} />
          <StatCard label="Companies" value={stats.companies} />
          <StatCard label="Avg. Stipend" value={`₹${(stats.avgStipend / 1000).toFixed(0)}K/mo`} />
          <StatCard label="Summer Interns" value={stats.summerCount} />
          <StatCard label="Full-Time" value={stats.placementCount} />
        </div>
      </div>

      <div style={styles.controls}>
        <input
          style={styles.search}
          placeholder="Search company or role…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select style={styles.select} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          {offerTypes.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All offer types" : t}
            </option>
          ))}
        </select>
        <select style={styles.select} value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)}>
          {branches.map((b) => (
            <option key={b} value={b}>
              {b === "All" ? "All branches" : b}
            </option>
          ))}
        </select>
        <div style={styles.sliderWrap}>
          <label style={styles.sliderLabel}>Max CGPA req. ≤ {minCgpa.toFixed(1)}</label>
          <input
            type="range"
            min="5"
            max="9"
            step="0.5"
            value={minCgpa}
            onChange={(e) => setMinCgpa(Number(e.target.value))}
            style={{ width: 140 }}
          />
        </div>
        <select style={styles.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date_desc">Newest first</option>
          <option value="date_asc">Oldest first</option>
          <option value="stipend_desc">Highest stipend</option>
          <option value="stipend_asc">Lowest stipend</option>
          <option value="cgpa_asc">Lowest CGPA cutoff</option>
        </select>
      </div>

      <div style={styles.count}>{filtered.length} of {records.length} offers shown</div>

      <div style={styles.grid}>
        {filtered.map((r, i) => {
          const isOpen = expanded === i + r.company + r.date;
          const key = i + r.company + r.date;
          const color = TYPE_COLORS[r.offer_type_norm] || "#555";
          return (
            <div key={key} className="pd-card-anim" style={styles.card}>
              <div style={styles.cardTop}>
                <div>
                  <div style={styles.company}>{r.company}</div>
                  <div style={styles.role}>{r.role || r.title}</div>
                </div>
                <div style={{ ...styles.badge, background: color }}>{r.offer_type_norm}</div>
              </div>

              <div style={styles.metaGrid}>
                <Meta label="Stipend" value={r.stipend || "—"} />
                <Meta label="CTC on conversion" value={r.ctc || "—"} truncate />
                <Meta label="Location" value={r.work_location || "—"} truncate />
                <Meta label="Eligibility" value={r.eligibility_criteria || "—"} truncate />
              </div>

              <div style={styles.branchesRow}>
                <span style={styles.branchLabel}>Branches:</span>{" "}
                <span style={styles.branchVal}>{r.eligible_branches || "Not specified"}</span>
              </div>

              <div style={styles.cardFooter}>
                <span style={styles.dateTag}>Posted {fmtDate(r.date)}</span>
                <button
                  style={styles.expandBtn}
                  onClick={() => setExpanded(isOpen ? null : key)}
                >
                  {isOpen ? "Hide details ▲" : "Full details ▼"}
                </button>
              </div>

              {isOpen && (
                <div style={styles.detailBox}>
                  <DetailRow label="Job Description" value={r.jd} />
                  <DetailRow label="Category" value={r.category} />
                  <DetailRow label="Selection Process" value={r.selection_process} />
                  <DetailRow label="Last Date to Register" value={r.last_date} />
                  {r.link && (
                    <DetailRow
                      label="Application Link"
                      value={
                        <a href={r.link} target="_blank" rel="noreferrer" style={styles.link}>
                          {r.link}
                        </a>
                      }
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={styles.empty}>No offers match these filters. Try widening the CGPA range or clearing search.</div>
      )}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={styles.statCard}>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function Meta({ label, value, truncate }) {
  return (
    <div>
      <div style={styles.metaLabel}>{label}</div>
      <div style={{ ...styles.metaValue, ...(truncate ? styles.truncate : {}) }} title={value}>
        {value}
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div style={styles.detailRow}>
      <div style={styles.detailLabel}>{label}</div>
      <div style={styles.detailValue}>{value}</div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Space Grotesk', sans-serif",
    background: "#F4F1EA",
    color: "#1c1a16",
    minHeight: "100%",
    padding: "28px 28px 60px",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 20,
    borderBottom: "2px solid #1c1a16",
    paddingBottom: 18,
    marginBottom: 22,
  },
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    letterSpacing: "0.12em",
    color: "#a8501f",
    fontWeight: 500,
    marginBottom: 6,
  },
  h1: {
    fontSize: 34,
    fontWeight: 700,
    margin: 0,
    letterSpacing: "-0.01em",
  },
  sub: {
    margin: "6px 0 0",
    fontSize: 14,
    color: "#5b564a",
  },
  statRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  statCard: {
    background: "#1c1a16",
    color: "#F4F1EA",
    borderRadius: 8,
    padding: "10px 16px",
    minWidth: 88,
    textAlign: "center",
  },
  statValue: { fontSize: 18, fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace" },
  statLabel: { fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.7, marginTop: 2 },
  controls: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 8,
    alignItems: "center",
  },
  search: {
    flex: "1 1 220px",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1.5px solid #1c1a16",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 14,
    background: "#fff",
  },
  select: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1.5px solid #1c1a16",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13,
    background: "#fff",
  },
  sliderWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "4px 12px",
  },
  sliderLabel: {
    fontSize: 11,
    fontFamily: "'IBM Plex Mono', monospace",
    color: "#5b564a",
  },
  count: {
    fontSize: 12,
    fontFamily: "'IBM Plex Mono', monospace",
    color: "#5b564a",
    margin: "10px 0 16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: 16,
  },
  card: {
    background: "#fff",
    border: "1.5px solid #1c1a16",
    borderRadius: 10,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 },
  company: { fontSize: 17, fontWeight: 700 },
  role: { fontSize: 13, color: "#5b564a", marginTop: 2 },
  badge: {
    color: "#fff",
    fontSize: 10,
    fontWeight: 600,
    padding: "5px 9px",
    borderRadius: 6,
    whiteSpace: "nowrap",
    fontFamily: "'IBM Plex Mono', monospace",
    letterSpacing: "0.02em",
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px 14px",
    borderTop: "1px dashed #d8d2c2",
    borderBottom: "1px dashed #d8d2c2",
    padding: "10px 0",
  },
  metaLabel: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#a39d8a",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  metaValue: { fontSize: 13, marginTop: 2, fontWeight: 500 },
  truncate: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  branchesRow: { fontSize: 12.5, lineHeight: 1.4 },
  branchLabel: { color: "#a39d8a", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, textTransform: "uppercase" },
  branchVal: { color: "#1c1a16" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 },
  dateTag: { fontSize: 11, color: "#a39d8a", fontFamily: "'IBM Plex Mono', monospace" },
  expandBtn: {
    background: "none",
    border: "none",
    color: "#a8501f",
    fontWeight: 600,
    fontSize: 12,
    cursor: "pointer",
    padding: 0,
    fontFamily: "'IBM Plex Mono', monospace",
  },
  detailBox: {
    background: "#F4F1EA",
    borderRadius: 8,
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  detailRow: { fontSize: 12.5 },
  detailLabel: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#a39d8a",
    fontFamily: "'IBM Plex Mono', monospace",
    marginBottom: 2,
  },
  detailValue: { lineHeight: 1.5, wordBreak: "break-word" },
  link: { color: "#1d6b54", wordBreak: "break-all" },
  empty: {
    textAlign: "center",
    padding: "60px 0",
    color: "#a39d8a",
    fontFamily: "'IBM Plex Mono', monospace",
  },
};
