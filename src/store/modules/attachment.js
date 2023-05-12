import {AttachmentApiInstance} from "@/api/config";

export const Attachment = {
    actions: {
        GET_ATTACHMENT({commit}, id) {
            return AttachmentApiInstance.get(`/files/${id}`).then ( res => {
                commit("ADD_ATTACHMENT", id, res.data);
                //commit("ADD_ATTACHMENT", id, `data:image/jpeg;base64,${res.data}`)
            })
        },
        SEND_ATTACHMENT(state, id, file) {
            // console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(file)
            // const formData = new FormData();
            // formData.append("files", file)
            return AttachmentApiInstance.post(`/adverts/${id}/attachments`, file).then ( res =>{
                return res;
            })
        }
    },
    state: {
        attachments: {}
    },
    getters: {
        ATTACHMENTS(state) {
            return state.attachments;
        },
        ATTACHMENT(state, id) {
            return state.attachments[id];
        }

    },
    mutations: {
        ADD_ATTACHMENT(state, id, attachment) {
            state.attachments[id] = attachment;
        }
    }
}