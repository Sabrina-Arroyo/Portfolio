/* =========================================
   PORTFOLIO — INTERACTIVE SKILL MAP
   ========================================= */

const skillData = {

    web: {
        category: "01 / WEB DEVELOPMENT",
        title: "Web Development",
        description:
            "Interactive websites, applications, interfaces, and digital experiences.",

        projects: [
            {
                number: "PROJECT 01",
                title: "Project Placeholder",
                description:
                    "A future project demonstrating web development skills.",
                tags: ["HTML", "CSS", "JavaScript"]
            },
            {
                number: "PROJECT 02",
                title: "Another Web Project",
                description:
                    "A future interactive website or application.",
                tags: ["HTML", "CSS", "JavaScript"]
            }
        ]
    },


    data: {
        category: "02 / DATA & ANALYTICS",
        title: "Data & Analytics",
        description:
            "Organizing information, analyzing data, and transforming complex information into useful insights.",

        projects: [
            {
                number: "PROJECT 01",
                title: "Data Project",
                description:
                    "A future project demonstrating data analysis and visualization.",
                tags: ["Excel", "Analysis", "Visualization"]
            },
            {
                number: "PROJECT 02",
                title: "Dashboard Project",
                description:
                    "A future dashboard or reporting project.",
                tags: ["Data", "Dashboard", "Reporting"]
            }
        ]
    },


    ai: {
        category: "03 / AI & AUTOMATION",
        title: "AI & Automation",
        description:
            "Using artificial intelligence and automation to create useful tools and streamline repetitive work.",

        projects: [
            {
                number: "PROJECT 01",
                title: "AI Project",
                description:
                    "A future project demonstrating practical AI implementation.",
                tags: ["AI", "Automation", "Technology"]
            },
            {
                number: "PROJECT 02",
                title: "Automation Tool",
                description:
                    "A future workflow or automation project.",
                tags: ["Automation", "AI", "Workflow"]
            }
        ]
    },


    systems: {
        category: "04 / SYSTEMS & PROCESS",
        title: "Systems & Process",
        description:
            "Designing organized workflows, improving processes, and creating systems that make work easier and more efficient.",

        projects: [
            {
                number: "PROJECT 01",
                title: "Process Improvement",
                description:
                    "A future project demonstrating workflow and process design.",
                tags: ["Systems", "Process", "Workflow"]
            },
            {
                number: "PROJECT 02",
                title: "Workflow System",
                description:
                    "A future system designed to organize and simplify work.",
                tags: ["Workflow", "Documentation", "Systems"]
            }
        ]
    },


    knowledge: {
        category: "05 / KNOWLEDGE MANAGEMENT",
        title: "Knowledge Management",
        description:
            "Organizing information so that people can find, understand, and use it effectively.",

        projects: [
            {
                number: "PROJECT 01",
                title: "Knowledge System",
                description:
                    "A future knowledge-management project.",
                tags: ["Knowledge", "Documentation", "Organization"]
            },
            {
                number: "PROJECT 02",
                title: "Information Architecture",
                description:
                    "A future project demonstrating information organization.",
                tags: ["Information", "Structure", "UX"]
            }
        ]
    }

};


/* =========================================
   ELEMENTS
   ========================================= */

const skillNodes = document.querySelectorAll(".skill-node");

const skillSection = document.querySelector("#skill-detail");

const skillCategory = document.querySelector("#skill-category");

const skillTitle = document.querySelector("#skill-title");

const skillDescription = document.querySelector("#skill-description");

const projectGrid = document.querySelector("#project-grid");

const closeSkillButton = document.querySelector("#close-skill");


/* =========================================
   OPEN SKILL
   ========================================= */

function openSkill(skillName) {

    const skill = skillData[skillName];

    if (!skill) {
        return;
    }


    /* Update skill information */

    skillCategory.textContent = skill.category;

    skillTitle.textContent = skill.title;

    skillDescription.textContent = skill.description;


    /* Clear existing projects */

    projectGrid.innerHTML = "";


    /* Create project cards */

    skill.projects.forEach((project) => {

        const card = document.createElement("article");

        card.className = "project-card";


        const tags = project.tags
            .map(tag => `<span>${tag}</span>`)
            .join("");


        card.innerHTML = `
            <span class="project-number">
                ${project.number}
            </span>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <div class="project-tags">
                ${tags}
            </div>
        `;


        projectGrid.appendChild(card);

    });


    /* Show skill section */

    skillSection.classList.add("active");


    /* Scroll to it */

    setTimeout(() => {

        skillSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


/* =========================================
   SKILL NODE EVENTS
   ========================================= */

skillNodes.forEach((node) => {

    node.addEventListener("click", () => {

        const skillName = node.dataset.skill;

        openSkill(skillName);

    });

});


/* =========================================
   CLOSE SKILL
   ========================================= */

closeSkillButton.addEventListener("click", () => {

    skillSection.classList.remove("active");

    document.querySelector("#skills").scrollIntoView({
        behavior: "smooth"
    });

});