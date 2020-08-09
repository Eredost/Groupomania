<?php


namespace App\Tests\Entity;


use App\Entity\Comment;
use App\Entity\Post;
use App\Entity\User;
use App\Tests\Entity\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CommentTest extends KernelTestCase
{
    use AssertTrait;

    private function getEntity(): Comment
    {
        return (new Comment())
            ->setMessage('Lorem ispum dolor sit amet')
            ->setOwner(new User())
            ->setPost(new Post())
        ;
    }

    public function testValidEntity()
    {
        $this->assertHasErrors($this->getEntity(), 0);
    }

    public function testInvalidEmptyMessage()
    {
        $this->assertHasErrors($this->getEntity()->setMessage(''), 1);
    }
}
