import Post from '../Post';

const Article = () =>{

    return (
        <section className="container">
            <h3>Articles</h3>
            <div className="mt-5 container-posts">
                <Post subtitle="tecnologia" title="O guia definitivo sobre o blog" >
                    12342134Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ornare urna pharetra 
                    ut ac, pellentesque. Ultricies habitasse 
                    pretium purus viverra. Sit eget volutpat 
                    semper vitae metus, fringilla ullamcorper 
                    sapien nibh.
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021?" >
                    212341234Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ornare urna pharetra 
                    ut ac, pellentesque. Ultricies habitasse 
                    pretium purus viverra. Sit eget volutpat 
                    semper vitae metus, fringilla ullamcorper 
                    sapien nibh.
                </Post>
                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria." >
                    3Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ornare urna pharetra 
                    ut ac, pellentesque. Ultricies habitasse 
                    pretium purus viverra. Sit eget volutpat 
                    semper vitae metus, fringilla ullamcorper 
                    sapien nibh.
                </Post>
            </div>
            
        </section>
    );
}

export default Article;