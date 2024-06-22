
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import SendMessage from "./SendMessage"

export default function Component() {
return (
    <section className="w-full py-24 bg-white dark:bg-gray-800 px-4 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SendMessage/>
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What do I get exactly?</AccordionTrigger>
                        <AccordionContent>
                        <p>Details about what you get.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-primary">Javascript or Typescript?</AccordionTrigger>
                        <AccordionContent>
                        <p>Both! You can choose once you get access.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>/app router or /pages router?</AccordionTrigger>
                        <AccordionContent>
                        <p>Explanation about routers.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>My tech stack is different, can I still use it?</AccordionTrigger>
                        <AccordionContent>
                        <p>Information about tech stack compatibility.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is it a website template?</AccordionTrigger>
                        <AccordionContent>
                        <p>Details about the template.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>How is ShipFast better than other boilerplates?</AccordionTrigger>
                        <AccordionContent>
                        <p>Advantages of using ShipFast.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Are there any other costs associated?</AccordionTrigger>
                        <AccordionContent>
                        <p>Information about additional costs.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
)
}