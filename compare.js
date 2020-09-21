var fs = require('fs');

const similarity = require('compute-cosine-similarity');
const l2norm = require( 'compute-l2norm' );

var list = JSON.parse(fs.readFileSync('./data.json', {encoding: 'utf-8'}))

function Compare(pose1, pose2) {
        //l2 normalization
        var l2norm_pose1 = l2norm(pose1);
        var l2norm_pose2 = l2norm(pose2);
        pose1 = pose1.map((point) => {
            return point/l2norm_pose1
        })
        pose2 = pose2.map((point) => {
            return point/l2norm_pose2
        })
    
        //transform
        const transform1_x = pose1[0];
        const transform1_y = pose1[1];
    
        const transform2_x = pose2[0];
        const transform2_y = pose2[1];
    
        for (let i = 0; i < pose1.length; i++) {
            if (i % 2 == 0 )
            {
                pose1[i] -= transform1_x;
            } else pose1[i] -= transform1_y;
        }
        for (let i = 0; i < pose2.length; i++) {
            if (i % 2 == 0 )
            {
                pose2[i] -= transform2_x;
            } else pose2[i] -= transform2_y;
        }
    
        let cosineSimilarity = similarity(pose1, pose2);
        let distance = Math.sqrt(2 * (1 - cosineSimilarity));
        console.log('cosine: ',cosineSimilarity);
        console.log('distance: ', distance);

        if ((cosineSimilarity >= 0.95) && (distance < 0.2)) return true;
    
        return false;
}

export {Compare};