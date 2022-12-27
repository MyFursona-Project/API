import { prisma } from "../index";
import { Resolver, Query, Arg, Int, ObjectType, Field } from "type-graphql";

@ObjectType()
class Profile {
  @Field(() => Int)
  id: number;
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  bio: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}

@Resolver()
export class ProfileResolver {
  @Query(() => Profile)
  getProfileById(@Arg("userID", () => Int) userID: number) {
    const profile = prisma.profile.findFirst({
      where: {
        id: userID,
      },
    });
    return profile;
  }
}
