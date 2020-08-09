<?php


namespace App\Tests\Entity;


use App\Entity\User;
use App\Tests\Entity\Traits\AssertTrait;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class UserTest extends KernelTestCase
{
    use AssertTrait;

    private function getEntity(): User
    {
        return (new User())
            ->setEmail('username@email.com')
            ->setUsername('username')
            ->setPassword('$argon2id$v=19$m=65536,t=4,p=1$XL3p6V6uztMHtBpD0GPaeA$2nlIu6Gno/tREQ0aXrjmzE488+582YJdBQ/7okz7PqQ')
        ;
    }

    public function testValidEntity()
    {
        $this->assertHasErrors($this->getEntity(), 0);
    }

    public function testInvalidEmptyEmail()
    {
        $this->assertHasErrors($this->getEntity()->setEmail(''), 1);
    }

    public function testInvalidEmailValue()
    {
        $this->assertHasErrors($this->getEntity()->setEmail('email@.fr'), 1);
        $this->assertHasErrors($this->getEntity()->setEmail('@email.fr'), 1);
        $this->assertHasErrors($this->getEntity()->setEmail('email@fr'), 1);
    }

    public function testAlreadyUsedEmail()
    {
        $this->assertHasErrors($this->getEntity()->setEmail('moderator@email.com'), 1);
    }

    public function testInvalidEmptyPassword()
    {
        $this->assertHasErrors($this->getEntity()->setPassword(''), 2);
    }

    public function testInvalidLengthPassword()
    {
        $this->assertHasErrors($this->getEntity()->setPassword('pass'), 1);
        $this->assertHasErrors($this->getEntity()->setPassword(str_repeat('p', 256)), 1);
    }

    public function testInvalidEmptyUsername()
    {
        $this->assertHasErrors($this->getEntity()->setUsername(''), 2);
    }

    public function testInvalidLengthUsername()
    {
        $this->assertHasErrors($this->getEntity()->setUsername('us'), 1);
        $this->assertHasErrors($this->getEntity()->setUsername(str_repeat('u', 61)), 1);
    }

    public function testAlreadyUsedUsername()
    {
        $this->assertHasErrors($this->getEntity()->setUsername('moderator'), 1);
    }
}
