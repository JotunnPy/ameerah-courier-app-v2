import { FAQs } from "../../data/faqData"
export default function handler(req, res){
    res.status(200).json(FAQs)
}