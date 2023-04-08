import React from 'react';
import ReactDOM from 'react-dom';
import { addBlog, removeBlog, editBlog } from './action/blogs';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';






  // Dispatch Start
const store = configureStore();
store.subscribe(()=>{
    console.log(store.getState());
})
 const blog1 = store.dispatch(addBlog({title:"blog1", description:"desk1"}));
 const blog2 = store.dispatch(addBlog({title:"blog2", description:"desk2"}));
 store.dispatch(addBlog({title:"blog3", description:"desk3"}));
 store.dispatch(addBlog({title:"blog4", description:"desk3"}));

//console.log(blog1.blog.id);
 store.dispatch(removeBlog({id:blog1.blog.id}));
 store.dispatch(editBlog(blog2.blog.id,{title: "update"}))
// Dispatch End


const App =()=>{
    return <div className='container'> <Provider store={store}>
        <AppRouters/>
    </Provider></div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));