<?php

namespace BaseValueObject\Scalar;

use PHPUnit\Framework\TestCase;

/**
 * Class BaseValueObjectTest
 * @package BaseValueObject\Scalar
 */
class BaseValueObjectTest extends TestCase
{
    /**
     * @test
     * @expectedException \InvalidArgumentException
     */
    public function validateEqualsException()
    {
        $stub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'Example'
        );
        $otherStub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'OtherClass'
        );

        $stub->equals($otherStub);
    }

    /**
     * @test
     */
    public function validateIsEquals()
    {
        $stub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'Example'
        );
        $otherStub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'Example'
        );

        $this->assertTrue($stub->equals($otherStub));
    }

    /**
     * @test
     */
    public function validateIsNotEquals()
    {
        $stub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'Example'
        );
        $stub->method('value')->willReturn(1);
        $otherStub = $this->getMockForAbstractClass(
            BaseScalar::class,
            [],
            'Example'
        );
        $stub->method('value')->willReturn(2);

        $this->assertFalse($stub->equals($otherStub));
    }
}
