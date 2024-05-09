const typeDefs = `#graphql
    scalar Buffer
    scalar Date

    type User {
        username: String!,
        userId: String!
    }

    type Shop {
        name: String!,
        desc: String!,
        userId: User!,
        rating: Int!,
        image: Buffer!,
        comment: [Comment!],
        createdAt: Date!
    }

    type Comment {
        shopId: Shop!,
        userId: User!,
        content: String!,
        rating: Int!,
        createdAt: Date!
    }
    type Query {
        allReviews: [Shop]!
    }

    type Mutation {
        updateReview(id: String!, input: updateReviewInput!): Shop!
        updateComment(id: String!, input: updateCommentInput!): Comment!
        deleteReview(id: String!): Shop!
        deleteComment(id:String!): Comment!
    }

    input updateReviewInput {
        name: String,
        desc: String,
        rating: Int
    }

    input updateCommentInput {
        content: String,
        rating: Int
    }
`;

module.exports = typeDefs;
