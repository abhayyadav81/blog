import createDataContext from "./createDataContext";
const blogReducer =(state,action)=> {
    switch(action.type) {
        case 'edit_BlogPost':
            return state.map(blogpost=>{
                return blogpost.id===action.payload.id ?action.payload :blogpost

            })
        case 'delete_BlogPost':
         return state.filter (blogPost=>blogPost.id !==action.payload)
        case'add_BlogPost':
        return[ ...state,{ id:Math.floor(Math.random()*999) ,title:action.payload.title,content:action.payload.content}];
        default:
            return state;

    }

}
const addBlogPosts=dispatch=> {
    return (title,content,callback)=> {
        dispatch({type : 'add_BlogPost' ,payload:{title,content}});
        if (callback){
            callback()
        }

    }
   
}
const deleteBlogPosts=dispatch=> {
    return id => {
        dispatch({type : 'delete_BlogPost',payload:id});

    }
   
}
const editBlogPosts=dispatch=> {
    return (id,title,content,callback) => {
        dispatch({type : 'edit_BlogPost',payload:{id,title,content}});
        if (callback){
            callback()
        }

    }
   
}

export const {Context,Provider}=createDataContext(blogReducer,{addBlogPosts,deleteBlogPosts,editBlogPosts},[{title:'Text Title',content:'Text Content',id:1}]);
