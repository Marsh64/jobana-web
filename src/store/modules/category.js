import {DefaultApiInstance} from "@/api/config";

export const Category = {
    state: {
        categories_tree: [],
        categories_list: [],
        selected: []
    },
    getters: {
        CATEGORIES_TREE(state) {
            return state.categories_tree;
        },
        CATEGORIES_LIST(state) {
            return state.categories_list;
        },
        SELECTED(state) {
            return state.selected;
        }
    },
    mutations: {
        UPDATE_CATEGORIES_TREE(state, categories_tree) {
            state.categories_tree = categories_tree;
        },
        UPDATE_CATEGORIES_LIST(state, categories_list) {
            state.categories_list = categories_list;
        },
        UPDATE_SELECTED(state, selected) {
            state.selected = selected;
        }
    },
    actions: {
        GET_CATEGORIES({commit}) {
            return DefaultApiInstance.get("/categories/all").then( res => {
                const tree = prepareTree(res.data)
                console.log(tree)
                commit("UPDATE_CATEGORIES_TREE", tree);
                const list = [];
                makeList(res.data, list);
                console.log(list)
                commit("UPDATE_CATEGORIES_LIST", list);
            })
        },
        SET_SELECTED({commit}, selected) {
            commit("UPDATE_SELECTED", selected);
        }
    }
}

function makeList(tree, list) {
    for (let leaf of tree){
        list.push(leaf["name"]);
        makeList(leaf["childCategories"], list);
    }

    return list;
}

function prepareTree(tree) {
    let branch = []
    for (let leaf of tree){
        branch.push(
            {
                "text": leaf["name"],
                "children": prepareTree(leaf["childCategories"])
            }
        );
    }

    return branch;
}