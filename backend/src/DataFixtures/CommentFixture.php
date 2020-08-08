<?php


namespace App\DataFixtures;


use App\Entity\Comment;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class CommentFixture extends BaseFixture implements DependentFixtureInterface
{

    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(50, 'comment', function () {
            return (new Comment())
                ->setMessage($this->faker->paragraph(3, true))
                ->setOwner($this->getRandomReference('main_user'))
                ->setPost($this->getRandomReference('post'))
            ;
        });

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            PostFixture::class,
        ];
    }
}
