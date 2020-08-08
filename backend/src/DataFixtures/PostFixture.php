<?php


namespace App\DataFixtures;


use App\Entity\Post;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class PostFixture extends BaseFixture implements DependentFixtureInterface
{
    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(12, 'post', function () {
            return (new Post())
                ->setContent($this->faker->paragraphs(2, true))
                ->setOwner($this->getRandomReference('main_user'))
            ;
        });

        $manager->flush();
    }

    /**
     * @inheritDoc
     */
    public function getDependencies()
    {
        return [
            UserFixture::class,
        ];
    }
}
