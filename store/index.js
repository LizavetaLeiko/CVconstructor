import {createStore} from "vuex";
import { pagesModule } from "@/store/pagesModule";

export default createStore({
    modules: {
        pages: pagesModule
    }
})