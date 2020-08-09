<?php


namespace App\Tests\Entity;


use App\Entity\Post;
use App\Entity\User;
use App\Tests\Entity\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class PostTest extends KernelTestCase
{
    use AssertTrait;

    private function getEntity(): Post
    {
        return (new Post())
            ->setContent('Lorem ispum dolor sit amet')
            ->setOwner(new User())
        ;
    }

    public function testValidEntity()
    {
        $this->assertHasErrors($this->getEntity(), 0);
    }

    public function testInvalidEmptyContent()
    {
        $this->assertHasErrors($this->getEntity()->setContent(''), 1);
    }
}
