namespace TSBackend
{
    public class newsPage
    {
        List<NewsArticle> p = new List<NewsArticle> {
            new NewsArticle{Id =1, Title ="Article 1" , PictureURL = ""},
            new NewsArticle{Id =2, Title ="Article 2" , PictureURL = ""},
            new NewsArticle{Id =3, Title ="Article 3" , PictureURL = ""},
        };
        public List<NewsArticle> getAll() {
            return p;
        }

        public NewsArticle getIndex(int index) {
            if (index < 0 || index > p.Count)
            {
                // return 0 by default
                return p[0];
            }
            return p[index];
        }
    }
}
