import Comment1 from '../../assets/images/comment1.png';
import Comment2 from '../../assets/images/comment2.png';
import Comment3 from '../../assets/images/comment3.png';
import Comment4 from '../../assets/images/comment4.png';
import Comment5 from '../../assets/images/comment5.png';
import Comment6 from '../../assets/images/comment6.png';

// services/PhotoService.ts
export interface Image {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

export class PhotoService {
    // A mock async function to simulate fetching images from an API
    static async getImages(): Promise<Image[]> {
        // This is where you'd fetch data from an API
        // Here, we're just mocking the response
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { itemImageSrc: Comment1, thumbnailImageSrc: Comment1, alt: "Deacroption for number 1", title: "Photo 1" },
                    { itemImageSrc: Comment2, thumbnailImageSrc: Comment2, alt: "Deacroption for number 2", title: "Photo 2" },
                    { itemImageSrc: Comment3, thumbnailImageSrc: Comment3, alt: "Deacroption for number 3", title: "Photo 3" },
                    { itemImageSrc: Comment4, thumbnailImageSrc: Comment4, alt: "Deacroption for number 4", title: "Photo 4" },
                    { itemImageSrc: Comment5, thumbnailImageSrc: Comment5, alt: "Deacroption for number 5", title: "Photo 5" },
                    { itemImageSrc: Comment6, thumbnailImageSrc: Comment6, alt: "Deacroption for number 6", title: "Photo 6" }
                ]);
            }, 1000);
        });
    }
}
