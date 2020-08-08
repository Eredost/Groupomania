<?php


namespace App\DataFixtures;


use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends BaseFixture
{
    /** @var UserPasswordEncoderInterface $encoder */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function loadData(ObjectManager $manager)
    {
        // Creating several users with base privileges
        $this->createMany(5, 'main_user', function () {
            $userEntity = (new User())
                ->setEmail($this->faker->unique()->email)
                ->setUsername($this->faker->unique()->userName)
            ;
            $userEntity->setPassword($this->encoder->encodePassword($userEntity, 'pa33Word'));

            return $userEntity;
        });

        // Creating user with moderator privileges
        $moderatorUserEntity = (new User())
            ->setEmail('moderator@email.com')
            ->setUsername('moderator')
            ->setRoles(['ROLE_MODERATOR'])
        ;
        $moderatorUserEntity->setPassword($this->encoder->encodePassword($moderatorUserEntity, 'pa33Word'));
        $manager->persist($moderatorUserEntity);

        $manager->flush();
    }
}
