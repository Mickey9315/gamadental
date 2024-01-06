import React from "react";


export default function ControlledAccordions() {

    const data = [
        {
            id: "panel1",
            heading: "Panel 1",
            details: "Nulla facilisi. Phasellus sollicitudin nulla et"
        },
        {
            id: "panel2",
            heading: "Panel 2",
            details: " et et et et et "
        },
        {
            id: "panel3",
            heading: "Panel 3",
            details: " at at at at at at "
        },
        {
            id: "panel4",
            heading: "Panel 4",
            details: " text text text text text "
        }
    ];

    return (
        <div className={classes.root}>
            {data.map((accordion) => {
                const { id, heading, secondaryHeading, details } = accordion;
                return (
                    <Accordion
                        expanded={expanded === id}
                        key={id}
                        onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{heading}</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {secondaryHeading}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
